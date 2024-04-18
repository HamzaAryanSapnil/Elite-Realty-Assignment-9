import PropTypes from "prop-types";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
const PropertyDetailsData = ({ item }) => {
  const { user } = useContext(AuthContext);
  console.log(user);
  console.log(item);
  const { segment_name, estate_title, description, image_url } = item;
  return (
    <div>
       
      <div className=" dark:bg-gray-100 dark:text-gray-900 my-10 " 
      
      >
        
        <div className="container grid grid-cols-12 mx-auto dark:bg-gray-50">
          <div
            className="bg-no-repeat bg-cover dark:bg-gray-300 col-span-full lg:col-span-4"
            style={{
              borderRadius: "20px",
              backgroundImage: `url(${image_url})`,
              backgroundPosition: "center center",
              backgroundBlendMode: "multiply",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
            <div className="flex justify-start">
              <span className="px-2 py-1 text-xs rounded-full dark:bg-violet-600 dark:text-gray-50">
                {segment_name}
              </span>
            </div>
            <h1 className="text-3xl font-semibold">{estate_title}</h1>
            <p className="flex-1 pt-2">{description.slice(0, 150)}....</p>
            <a
              rel="noopener noreferrer"
              href="#"
              className="inline-flex items-center pt-2 pb-6 space-x-2 text-sm dark:text-violet-600"
            >
              <Link to={`/estate_details/${item.id}`}>
                <button className="btn btn-outline btn-warning">
                  Read more
                </button>
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <div className="flex items-center justify-between pt-2">
              <div className="flex space-x-2">
                <img
                  src={
                    user.photoURL
                      ? user.photoURL
                      : "https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                  }
                  alt=""
                  className="rounded-full w-10 h-10"
                />
                <span className="self-center text-sm">
                  by {user.displayName}
                </span>
              </div>
              <span className="text-xs">3 min read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PropertyDetailsData.propTypes = {
  item: PropTypes.object,
};

export default PropertyDetailsData;
