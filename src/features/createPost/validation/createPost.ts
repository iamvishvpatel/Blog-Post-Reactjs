import z from "zod";

export const postSchema= z.object({
    title: z.string().min(3, "Title is too short"),
    content: z.string().min(10, "Content is too short"),
    categoryId: z.number().int().positive("Select a category"),
    tagIds: z.array(z.number()).optional(),
})

export type PostFromData = z.infer<typeof postSchema>;