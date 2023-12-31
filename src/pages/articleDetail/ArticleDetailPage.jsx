import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import BreadCrumbs from "../../components/BreadCrumbs";
// import CommentsContainer from "../../components/comments/CommentsContainer";
import MainLayout from "../../components/MainLayout";
// import SocialShareButtons from "../../components/SocialShareButtons";
import { images } from "../../constants";
import SuggestedPosts from "./container/SuggestedPosts";
// import { useQuery } from "@tanstack/react-query";
// import { getAllPosts, getSinglePost } from "../../services/index/posts";
// import ArticleDetailSkeleton from "./components/ArticleDetailSkeleton";
// import ErrorMessage from "../../components/ErrorMessage";
// import { useSelector } from "react-redux";
// import parseJsonToHtml from "../../utils/parseJsonToHtml";

const ArticleDetailPage = () => {
  //   const { slug } = useParams();
  //   const userState = useSelector((state) => state.user);
  //   const [breadCrumbsData, setbreadCrumbsData] = useState([]);
  //   const [body, setBody] = useState(null);

  //   const { data, isLoading, isError } = useQuery({
  //     queryFn: () => getSinglePost({ slug }),
  //     queryKey: ["blog", slug],
  //     onSuccess: (data) => {
  //       setbreadCrumbsData([
  //         { name: "Home", link: "/" },
  //         { name: "Blog", link: "/blog" },
  //         { name: "Article title", link: `/blog/${data.slug}` },
  //       ]);
  //       setBody(parseJsonToHtml(data?.body));
  //     },
  //   });

  //   const { data: postsData } = useQuery({
  //     queryFn: () => getAllPosts(),
  //     queryKey: ["posts"],
  //   });

  const breadCrumbsData = [
    { name: "Home", link: "/" },
    { name: "Blog", link: "/blog" },
    { name: "Article title", link: "/blog/1" },
  ];

  const postsData = [
    {
      _id: "1",
      image: images.Post1Image,
      title: "Help Children",
      createdAt: "2023-01-",
    },
    {
      _id: "2",
      image: images.Post1Image,
      title: "Help Children",
      createdAt: "2023-01-",
    },
    {
      _id: "3",
      image: images.Post1Image,
      title: "Help Children",
      createdAt: "2023-01-",
    },
    {
      _id: "4",
      image: images.Post1Image,
      title: "Help Children",
      createdAt: "2023-01-",
    },
  ];

  const tagsData = [
    "Medical",
    "Science",
    "Art",
  ]
  return (
    <MainLayout>
      {/* {isLoading ? (
        <ArticleDetailSkeleton />
      ) : isError ? (
        <ErrorMessage message="Couldn't fetch the post detail" />
      ) : ( */}
      <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
        <article className="flex-1">
          <BreadCrumbs data={breadCrumbsData} />
          <img
            className="rounded-xl w-full"
            src={images.Post1Image}
            alt="data?.title"
          />
          <div className="mt-4 flex gap-2">
            {/* {data?.categories.map((category) => ( */}
            <Link
              to={`/blog?category={category.name}`}
              className="text-primary text-sm font-roboto inline-block md:text-base"
            >
              {/* {category.name} */}
              Education
            </Link>
            {/* ))} */}
          </div>
          <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
            {/* {data?.title} */}
            Title
          </h1>
          <div className="mt-4 prose prose-sm sm:prose-base">
            {/* {body} */}
            Disc
          </div>
          {/* <CommentsContainer
            comments={data?.comments}
            className="mt-10"
            logginedUserId={userState?.userInfo?._id}
            postSlug={slug}
          /> */}
        </article>
        <div>
            <SuggestedPosts
              header="Latest Article"
              // posts={postsData?.data}
              posts={postsData}
              tags={tagsData}
              // tags={data?.tags}
              className="mt-8 lg:mt-0 lg:max-w-xs"
            />
            {/* <div className="mt-7">
              <h2 className="font-roboto font-medium text-dark-hard mb-4 md:text-xl">
                Share on:
              </h2>
              <SocialShareButtons
                url={encodeURI(window.location.href)}
                title={encodeURIComponent(data?.title)}
              />
            </div> */}
          </div>
      </section>
      {/* )} */}
    </MainLayout>
  );
};

export default ArticleDetailPage;
