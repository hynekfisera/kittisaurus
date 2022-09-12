import React from "react";
import cats from "../../resources/cats";
import { NextSeo } from "next-seo";
import { GetServerSidePropsContext } from "next";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const result = context.query.result as string;
  const resultArray = result.split(",");
  const points = resultArray.map((result) => {
    const data = result.split("-");
    return {
      catId: +data[0],
      points: +data[1],
      maxPoints: +data[2],
    };
  });

  return {
    props: {
      points,
    },
  };
}

export default function Result({ points }: { points: [{ catId: number; points: number; maxPoints: number }] }) {
  return (
    <>
      <NextSeo title="Result" />
      <main className="bg-gradient-to-br from-rose-200 to-orange-200 min-h-screen flex items-center">
        <section className="max-w-screen-md mx-auto px-4 md:px-0 flex flex-col items-center gap-4">
          <h1 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-900 text-center">Result</h1>
          <div className="flex flex-col gap-4">
            {points
              .sort((a, b) => (a.points / a.maxPoints < b.points / b.maxPoints ? 1 : -1))
              .map((cat, i) => (
                <div key={cat.catId} className={`flex justify-between gap-8 ${i === 0 ? "font-bold" : "font-medium"}`}>
                  <div>{cats.find((c) => c.id === cat.catId)!.name}</div>
                  <div>
                    {((cat.points / cat.maxPoints) * 100).toFixed(2)} % ({cat.points}/{cat.maxPoints})
                  </div>
                </div>
              ))}
          </div>
        </section>
      </main>
    </>
  );
}
