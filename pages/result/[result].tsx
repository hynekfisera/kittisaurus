import React, { useState, useEffect } from "react";
import cats from "../../resources/cats";
import { NextSeo } from "next-seo";
import { Points } from "../../types/Points";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Wrapper from "../../components/Wrapper";

export default function Result() {
  const [points, setPoints] = useState<Points[] | false | null>(null);
  const router = useRouter();

  useEffect(() => {
    setPoints(null);
    const { result } = router.query;
    if (typeof result !== "string") {
      setPoints(false);
      return;
    } else {
      const resultArray = result.split(",");
      const parsedResults = resultArray.map((result) => {
        const data = result.split("-");
        return {
          catId: +data[0],
          points: +data[1],
          maxPoints: +data[2],
        };
      });
      setPoints(parsedResults);
    }
  }, [router.query]);

  if (points) {
    points.sort((a, b) => (a.points / a.maxPoints < b.points / b.maxPoints ? 1 : -1));

    const firstCat = cats.find((cat) => cat.id === points[0].catId)!;

    return (
      <>
        <NextSeo title="Result" />
        <Wrapper>
          <Image src={firstCat.picture} alt={firstCat.name} width={100} height={100} className="rounded-full border-2 border-rose-500" />
          <h1 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-900 text-center">You are {firstCat.name}!</h1>
          <p className="text-center font-medium text-sm max-w-md text-gray-700">
            {firstCat.description}{" "}
            <Link href={firstCat.link}>
              <a className="select-none underline text-rose-500">Learn more about {firstCat.name}</a>
            </Link>
          </p>
          <div className="flex flex-col gap-3 text-lg">
            {points
              .filter((cat, i) => i <= 3)
              .map((cat, i) => (
                <div key={cat.catId} className={`flex justify-between text-sm md:text-base gap-8 ${i === 0 ? "font-bold text-gray-800" : "font-normal text-gray-700"}`}>
                  <div>{cats.find((c) => c.id === cat.catId)!.name}</div>
                  <div>
                    {((cat.points / cat.maxPoints) * 100).toFixed(2)} % ({cat.points}/{cat.maxPoints})
                  </div>
                </div>
              ))}
          </div>
          <div className="flex justify-center flex-wrap gap-3">
            <button className="btn btn-primary" onClick={() => navigator.clipboard.writeText(window.location.origin + router.asPath)}>
              Copy link to result
            </button>
            <Link href="/test">
              <a className="btn btn-secondary">Try again</a>
            </Link>
          </div>
        </Wrapper>
      </>
    );
  }
}
