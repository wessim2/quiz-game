import { Link } from 'react-router-dom';

type CategoryCardPropos = {
  id: string;
  name: string;
  image: string;
};

export const CategoryCards = ({ id, image, name }: CategoryCardPropos) => {
  return (
    <Link to={`/app/categories/${id}`}>
      <div className="relative w-60 h-28">
        <img
          src={image}
          alt="category photo"
          className="object-cover h-full w-full rounded-basic brightness-75 hover:brightness-50 hover:cursor-pointer"
        />
        <div className="absolute bottom-0 left-0 w-full font-extrabold lette tracking-wide  text-white text-center p-1 rounded-b-basic">
          {name}
        </div>
      </div>
    </Link>
  );
};
