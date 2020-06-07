import React from "react";
import { COURCESDATA } from "../../sampleData/courcesDetails";
import { Link } from "react-router-dom";

const CourcesSection = (props) => {
  console.warn(props);

  const DataToBeDisplayed = COURCESDATA.filter((_, index) => {
    if (props.limit) {
      if (props.limit > index) {
        return true;
      }
      return false;
    }
    return true;
  });
  return (
    <section className="ftco-section">
      <div className="container-fluid px-4">
        <div className="row justify-content-center mb-5 pb-2">
          <div className="col-md-8 text-center heading-section ">
            <h2 className="mb-4">
              <span>Our</span> Courses
            </h2>
            <p>
              Department of Computer Science and Engineering, JMIT provides an online plateform ELearning for learning various courses through video
              tutorials, lecture notes delievered by our faculty.s
            </p>
          </div>
        </div>
        <div className="row">
          {DataToBeDisplayed.map((elem, index) => (
            <div key={index} className="col-md-3 course ">
              <div className="img" style={{ backgroundImage: `url(${elem.image})` }} />
              <div className="text pt-4">
                <h3>{props && props.user ? <a href={elem.link}>{elem.name}</a> : <>{elem.name}</>}</h3>
                <p>{elem.description}</p>
                <p>
                  {props && props.user ? (
                    <a href={elem.link} className="btn btn-primary">
                      View More
                    </a>
                  ) : (
                    <Link to="/login" className="btn btn-primary">
                      Login to View
                    </Link>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourcesSection;

// {COURCESDATA.map((elem, index) => {
//   let limit = props.limit - 1 || COURCESDATA.length;
//   if (limit < index) {
//     return <></>;
//   }
//   return (
//     <div key={index} className="col-md-3 course ">
//       <div className="img" style={{ backgroundImage: `url(${elem.image})` }} />
//       <div className="text pt-4">
//         <h3>
//           <Link to={elem.link}>{elem.name}</Link>
//         </h3>
//         <p>{elem.description}</p>
//         <p>
//           <Link to={elem.link} className="btn btn-primary">
//             View More
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// })}
