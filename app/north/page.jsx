import React from "react";
import { recipe } from "@/app/data/data";
import Link from "next/link";

function page() {
  return (
    <div className="flex flex-col gap-10">
      <div className="h-16 w-full mt-3 " />

      <h1 className="text-3xl font-semibold  mx-auto">North Indian Cuisines</h1>

      {recipe['north'].map((food, idx) => {
        if (idx % 2 == 0) {
          return (
            <div
              key={idx}
              className="card rounded-2xl overflow-hidden lg:card-side w-10/12 mx-auto bg-base-200 shadow-xl mt-3"
            >
              <img src={food.imageUrl} alt="Album" className="h-full" />

              <div className="card-body w-full">
                <h2 className="card-title">{food.title}</h2>
                <p>{food.description}</p>
                <h2 className="card-title">Quick recipe</h2>
                <p>{food.quickRecipe}</p>
                <div className="card-actions justify-end">
                  <Link
                    href={food.youtubeLink}
                    target="blank"
                    className="btn btn-primary"
                  >
                    recipe
                  </Link>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div
              key={idx}
              className="card rounded-2xl overflow-hidden lg:card-side w-10/12 mx-auto bg-base-200 shadow-xl mt-3"
            >


              <div className="card-body w-full">
                <h2 className="card-title">{food.title}</h2>
                <p>{food.description}</p>
                <h2 className="card-title">Quick recipe</h2>
                <p>{food.quickRecipe}</p>
                <div className="card-actions justify-start">
                  <Link
                    href={food.youtubeLink}
                    target="blank"
                    className="btn btn-primary"
                  >
                    recipe
                  </Link>
                </div>
              </div>
              <img src={food.imageUrl} alt="Album" className="h-full" />
            </div>
          );
        }
      })}
    </div>
  );
}

export default page;
