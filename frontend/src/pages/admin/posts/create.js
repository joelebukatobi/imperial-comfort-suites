// React
import { useState } from 'react';
// Next JS
import Link from 'next/link';
import dynamic from 'next/dynamic';
// Components
import Layout from '@/admin//layouts/Layout';
import Input from '@/admin//element/Input';
import Select from '@/admin//element/Select';
const Editor = dynamic(() => import('@/admin//components/Editor'), { ssr: false });

export default function Create() {
  // Store values gotten from form
  const [post, setPost] = useState('');
  const [author, setAuthor] = useState('');
  const [tags, setTags] = useState('');
  const [categories, setCategories] = useState('');

  console.log(post);
  // Select Options
  const authorOptions = [
    { value: 'green', label: 'Green' },
    { value: 'blue', label: 'Blue' },
    { value: 'red', label: 'Red' },
  ];

  const tagOptions = [
    { value: 'green', label: 'Green' },
    { value: 'blue', label: 'Blue' },
    { value: 'red', label: 'Red' },
  ];

  const catOptions = [
    { value: 'green', label: 'Green' },
    { value: 'blue', label: 'Blue' },
    { value: 'red', label: 'Red' },
  ];

  //
  return (
    <Layout>
      <div>
        <header className="flex flex-col ">
          <div className="flex items-center mb-[1.6rem]">
            <h3 className="text-black/90 mr-[1.6rem]">Article One</h3>
            <figcaption className="tag">
              <p>Publish</p>
            </figcaption>
          </div>

          <div className="flex">
            <Link href="/admin">
              <h5 className="text-black/70 hover:text-black">Dashboard &nbsp;</h5>
            </Link>
            <h5>&gt; &nbsp;</h5>
            <Link href="/admin/post">
              <h5 className="text-black/70 hover:text-black">Posts &nbsp;</h5>
            </Link>
            <h5>&gt; &nbsp;</h5>
            <Link href="/admin/post/article-one">
              <h5 className=" text-black/70 hover:text-black">Article One &nbsp;</h5>
            </Link>
          </div>
        </header>

        <form action="" className="mt-[4rem]">
          <Input
            label={'Title'}
            placeholder={'Article One'}
            type={'text'}
            onChange
            required
            className={'mb-[2.4rem]'}
            classInput={'mt-[.8rem]'}
          />

          <div className="flex items-start gap-x-[3.2rem] mb-[2.4rem];">
            <Select
              placeHolder="Author"
              label="Author"
              options={authorOptions}
              onChange={(value) => setAuthor(value.value)}
            />
            <Select
              placeHolder="Tags"
              label="Tags"
              isMulti
              options={tagOptions}
              onChange={(value) => setTags(value.value)}
            />
            <Select
              placeHolder="Categories"
              label="Categories"
              options={catOptions}
              onChange={(value) => setCategories(value.value)}
            />
          </div>

          <div className="">
            <label className="text-black/70">Post</label>
            <div className="mt-[.8rem]">
              <Editor onChange={setPost} />
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}
