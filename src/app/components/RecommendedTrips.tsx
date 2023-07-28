import HorizontalSeparator from "@/components/HorizontalSeparator";
import TripItem from "@/components/TripItem";
import { Trip } from "@prisma/client";
import React from "react";

const RecommendedTrips = async () => {
  const data = await fetch("http://localhost:3000/hello").then((res) => res.json());

  return (
    <div className="container mx-auto p-5">
      <HorizontalSeparator text="Destinos recomendados" />

      <div className="flex flex-col items-center mt-5 gap-7">
        {data.map((trip: Trip) => (
          <TripItem key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedTrips;
