import React from "react";
import { useForm } from "react-hook-form";

const AddArticle = () => {
    const { register, handleSubmit } = useForm();
    // const dispatch = useDispatch();

    const submit = (data) => {
        const product = {
            model: data.model,
            brand: data.brand,
            status: data.status === "true" ? true : false,
            price: data.price,
            keyFeature: [
                data.keyFeature1,
                data.keyFeature2,
                data.keyFeature3,
                data.keyFeature4,
            ],
            spec: [],
        };

        console.log(product);
    };

    return (
        <div className='flex justify-center items-center h-full '>
            <form
                className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white'
                onSubmit={handleSubmit(submit)}
            >
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='author'>
                        Author
                    </label>
                    <input type='text' id='author' {...register("author")} />
                </div>

                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='title'>
                        Title
                    </label>
                    <input type='text' id='title' {...register("title")} />
                </div>

                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-3' htmlFor='brand'>
                        Content
                    </label>
                    <textarea className="h-32" type='text' id='title' {...register("title")} />
                </div>

                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-3' htmlFor='brand'>
                        ImageURL
                    </label>
                    <input type='text' id='title' {...register("title")} />
                </div>


                <div className='flex justify-between items-center w-full'>
                    <button
                        className=' px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
                        type='submit'
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddArticle;
