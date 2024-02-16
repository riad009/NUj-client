import React from "react";
import { Link } from "react-router-dom";

const EcoSpaceList = () => {
  return (
    <div>
      <h2 className="mt-40">List</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, dicta eius
        nulla nihil ipsam vel at, tempora dolorum quisquam, commodi autem
        blanditiis molestias sequi perferendis itaque vero repellat illo modi
        laborum aspernatur rem cupiditate vitae doloribus consequuntur.
        Reiciendis in voluptates quidem deserunt harum ex sunt temporibus illo
        libero repellendus ut, facere debitis sint sapiente expedita distinctio
        aut! Iusto culpa sint quidem sequi beatae adipisci, cupiditate quam eum
        dicta fugit quo earum minima illum consequuntur obcaecati sunt quia
        inventore itaque enim et. Culpa ut deserunt nemo nesciunt vero magnam
        perferendis adipisci optio? Laborum cum laboriosam magnam quos obcaecati
        est vero maxime.
      </p>
      <Link className="p-btn" to="/profile/eco-space">
        View EcoSpace
      </Link>
    </div>
  );
};

export default EcoSpaceList;
