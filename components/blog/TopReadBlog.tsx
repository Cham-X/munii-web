import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Select } from "@chakra-ui/react";
import { getTopReadPost, getRelatedPosts } from "@/utils";
import SeriesBlogCard from "../cards/SeriesBlogCard";
import Link from "next/link";
import { NewsLetter } from "../main";
import { Post } from "@/types";

const TopReadBlog = () => {
  const [topReadPost, setTopReadPost] = useState<Post | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const post = await getTopReadPost();
      setTopReadPost(post);

      if (post) {
        const related = await getRelatedPosts(post.categories[0].id);
        setRelatedPosts(related);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="px-4 lg:px-[5rem] md:py-[1.5rem]">
      <div className="flex flex-col md:flex-row justify-between gap-4 ">
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-semibold">Top Reads</h1>
          {topReadPost && (
            <article className="max-w-[804px] flex flex-col gap-4">
              <Image
                src={topReadPost.mainImageUrl}
                width={804}
                height={336}
                alt="blog post"
                className="rounded-xl"
              />
              <p>1 Month Ago</p>
              <h1 className="text-2xl font-medium">{topReadPost.title}</h1>
              <p className="text-sm text-s-text">{topReadPost.snippet}</p>
              <Link
                href={`/blog/${topReadPost.id}`}
                className="self-end border-b border-b-black"
              >
                View Post
              </Link>
            </article>
          )}
        </div>
        <div className="flex flex-col gap-8">
          <Select
            w="147px"
            h="48px"
            alignSelf="end"
            rounded="12px"
            borderColor="rgba(85, 85, 85, 0.2)"
            focusBorderColor="rgba(85, 85, 85, 0.2)"
            placeholder="See All"
          ></Select>
          <SeriesBlogCard title="Related Posts" data={relatedPosts} />
        </div>
      </div>
      <NewsLetter />
    </section>
  );
};

export default TopReadBlog;
