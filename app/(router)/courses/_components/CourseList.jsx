"use client";
import GlobalApi from "@/app/_utils/GlobalApi";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CourseItem from "./CourseItem";

function CourseList() {
  const [coursList, setCoursList] = useState([]);

  useEffect(() => {
    getAllCourses();

    return () => {};
  }, []);

  const getAllCourses = () => {
    GlobalApi.getAllCourseList().then((resp) => {
      console.log(resp);
      setCoursList(resp.courseLists);
    });
  };

  return (
    <div className="p-5 bg-white rounded-lg mt-5">
      <div className="flex items-center justify-between">
        <h2 className="text-[20px] font-bold text-primary">All Courses</h2>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="system">All</SelectItem>
            <SelectItem value="light">Free</SelectItem>
            <SelectItem value="dark">Paid</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {coursList?.length > 0
          ? coursList &&
            coursList?.map((item, index) => (
              <div key={index}>
                <CourseItem course={item} />
              </div>
            ))
          : [1, 2, 3, 4, 5, 6, 7].map((item, index) => (
              <div
                className="w-full h-[240px] rounded-xl m-2 bg-slate-200 animate-pulse"
                key={index}
              ></div>
            ))}
      </div>
    </div>
  );
}

export default CourseList;
