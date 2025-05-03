import type { Context } from "hono";
import * as userModel from "../models/user.model.ts";

type createUserBody = {
	firstName: string;
	lastName: string;
};

const createUser = async (c: Context) => {
	try {
		const body = await c.req.json<createUserBody>();
		if (!body.firstName || !body.lastName)
			return c.json(
				{
					success: false,
					data: null,
					msg: "Missing required fields",
				},
				400
			);
		if (await userModel.isDuplicate(body.firstName, body.lastName)) {
			return c.json({
				success: false,
				data: null,
				msg: "firstName or lastName is duplicated",
			});
		}
		const newUser = await userModel.createUser(
			body.firstName,
			body.lastName
		);
		return c.json({
			success: true,
			data: newUser,
			msg: "Created new User!",
		});
	} catch (e) {
		return c.json(
			{
				success: false,
				data: null,
				msg: `${e}`,
			},
			500
		);
	}
}
const getAllUser = async (c: Context) => {
    try {
        const user = await userModel.getAllUser();
        return c.json({ success: true, data: user }, 200);
    } catch (e) {
        return c.json({ success: false, data: null, msg: `${e}` }, 500);
    }
}
const editUser = async (c: Context) => {
	try {
		const idParam = c.req.query("id") ?? "";
		const body = await c.req.json();
		const { firstName, lastName } = body;
		const id = parseInt(idParam);
		if(isNaN(id) || !firstName||!body.lastName){
			return c.json({
				success: false,
				data: null,
				msg: "Missing required fields",
			},400);}
		const user = await userModel.editUser(id, firstName, lastName);
		if(!user){
			return c.json({
				success: false,
				msg: "User not found",
			},404);
		}
		return c.json({
			success: true,
			data: user,
			msg: "Updated User!",
		});
	}catch (e){
		return c.json({
			success: false,
			data: null,
			msg: `${e}`,
		},500);
	}
}
export { createUser, getAllUser, editUser };