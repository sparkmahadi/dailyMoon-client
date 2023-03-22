import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToReadingHistory, removeFromReadingHistory } from './../redux/actions/articlesAction';

const ReadingHistory = () => {
    const dispatch = useDispatch();
    const articles = useSelector(state => state.article.readingHistories);
    articles.sort((a, b) => new Date(b.readAt) - new Date(a.readAt));

    console.log(articles);

    return (
        <div className='flex flex-col justify-center items-center h-full w-full '>
      <div className='w-full max-w-7xl mx-auto rounded-lg  bg-white shadow-lg border border-gray-200'>
        <header className='px-5 py-4 border-b border-gray-100'>
          <div className='font-semibold text-gray-800'>Products</div>
        </header>

        <div className='overflow-x-auto p-3'>
          <table className='table-auto w-full'>
            <thead className='text-xs font-semibold uppercase text-gray-400 bg-gray-50'>
              <tr>
                <th></th>
                <th className='p-2'>
                  <div className='font-semibold text-left'>Article Name</div>
                </th>
                <th className='p-2'>
                  <div className='font-semibold text-left'>Author</div>
                </th>
                <th className='p-2'>
                  <div className='font-semibold text-left'>Read At</div>
                </th>
                <th className='p-2'>
                  <div className='font-semibold text-center'>Action</div>
                </th>
              </tr>
            </thead>

            <tbody className='text-sm divide-y divide-gray-100'>
              {articles.map((blog) => (
                <tr key={blog._id}>
                  <td className='p-2'>
                    <input type='checkbox' className='w-5 h-5' value='id-1' />
                  </td>
                  <td className='p-2'>
                    <p className='font-medium text-gray-800'>{blog.title}</p>
                  </td>
                  <td className='p-2'>
                    <p className='text-left capitalize'>{blog.author}</p>
                  </td>
                  <td className='p-2'>
                        <p>{blog.readAt}</p>
                  </td>
                  <td className='p-2'>
                    <div className='flex justify-center'>
                      <button onClick={()=>dispatch(removeFromReadingHistory(blog))}>
                        <svg
                          className='w-8 h-8 hover:text-blue-600 rounded-full hover:bg-gray-100 p-1'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                          ></path>
                        </svg>
                      </button>

                      <button className='btn bg-green-300 px-2 rounded-lg' onClick={()=>dispatch(addToReadingHistory(blog))}><p>Already Read</p></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
};

export default ReadingHistory;