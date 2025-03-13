import "../components/AboutProduct.css";
import Presentation from "../components/Presentation";
import {
  Link,
  data,
  useLoaderData,
  useNavigate,
  useParams,
} from "react-router";
import { Fragment, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { FaArrowRight } from "react-icons/fa";

export default function AboutProduct() {
  const [type, setType] = useState(1);
  const product = useLoaderData();
  const { lang } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setType(1);
  }, [product]);

  return (
    <>
      <Helmet>
        <title>
          {(lang === "en"
            ? product?.general?.p?.en
            : product?.general?.p?.ru) || product?.general?.title?.en}
        </title>
        <meta name="description" content="" />
      </Helmet>
      <div className="about-product-page">
        <div>
          <Presentation images={product?.images} />
          <div className="general-info">
            <h1>
              {lang === "en"
                ? product?.general?.title?.en
                : product?.general?.title?.ru}
            </h1>
            {/* for paragraphs */}
            {product?.general?.p?.en &&
              (lang === "en"
                ? product?.general?.p?.en
                : product?.general?.p?.ru
              )?.map((paragraph, key) => <p key={key}>{paragraph}</p>)}
            <div className="consulting">
              <h2>
                {lang === "en" ? "NEED A CONSULTATION" : "НУЖНА КОНСУЛЬТАЦИЯ"}
              </h2>
              <Link to="/contact-us">
                {lang === "en" ? "CONTACT US" : "СВЯЗАТЬСЯ"}
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="catalog">
            <button
              className={type === 1 ? "active" : ""}
              onClick={() => setType(1)}
            >
              {lang === "en" ? "Advantages" : "Преимущества"}
            </button>
            <button
              className={type === 2 ? "active" : ""}
              onClick={() => setType(2)}
            >
              {lang === "en" ? "Video" : "Видео"}
            </button>
          </div>

          {type === 1 && (
            <div className="full-info">
              <h1>
                {lang === "en"
                  ? product?.adv?.list?.title?.en
                  : product?.adv?.list?.title?.ru}
              </h1>

              <div className="list" key={product?.adv?.list?.title?.en + "1"}>
                <p>
                  {lang === "en"
                    ? product?.adv?.list?.p?.en
                    : product?.adv?.list?.p?.ru}
                </p>
                {(lang === "en"
                  ? product?.adv?.list?.ulListTitle?.en
                  : product?.adv?.list?.ulListTitle?.ru
                )?.map((title, index) => (
                  <Fragment key={title + index}>
                    <h3>{title}</h3>
                    <ul>
                      {(lang === "en"
                        ? product?.adv?.list?.ulListItem?.en
                        : product?.adv?.list?.ulListItem?.ru)?.[index]?.map(
                        (item) => (
                          <li key={item + index}>{item}</li>
                        )
                      )}
                    </ul>
                  </Fragment>
                ))}

                {product?.adv?.list?.ulListTitle === null && (
                  <>
                    <ul>
                      {(lang === "en"
                        ? product?.adv?.list?.ulListItem?.en
                        : product?.adv?.list?.ulListItem?.ru
                      ).map((item, index) => (
                        <li key={item + index}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              {product?.adv?.list?.title2?.en && (
                <h1>{product?.adv?.list?.title2?.en}</h1>
              )}

              {product?.adv?.list?.title2?.en && (
                <div
                  className="list"
                  key={product?.adv?.list?.title2?.en + "2"}
                >
                  {(lang === "en"
                    ? product?.adv?.list?.ulListTitle2?.en
                    : product?.adv?.list?.ulListTitle2?.ru
                  )?.map((title, index) => (
                    <Fragment key={title + index}>
                      <h3 key={title + index}>{title}</h3>
                      <ul>
                        {(lang === "en"
                          ? product?.adv?.list?.ulListItem2?.en
                          : product?.adv?.list?.ulListItem2?.ru)?.[index]?.map(
                          (item) => (
                            <li key={item + index}>{item}</li>
                          )
                        )}
                      </ul>
                    </Fragment>
                  ))}

                  {product?.adv?.list?.ulListTitle2 === null && (
                    <>
                      <p>{product?.adv?.list?.p2}</p>
                      <ul>
                        {(lang === "en"
                          ? product?.adv?.list?.ulListItem2?.en
                          : product?.adv?.list?.ulListItem2?.ru
                        )?.map((item, index) => (
                          <li key={item + index}>{item}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              )}

              {product?.adv?.list?.olListTitle?.en && (
                <div className="list" key={product?.adv?.list?.title?.en + "3"}>
                  <Fragment>
                    <ol>
                      {(lang === "en"
                        ? product?.adv?.list?.olListTitle?.en
                        : product?.adv?.list?.olListTitle?.ru
                      )?.map((title, index) => (
                        <li
                          style={index >= 9 ? { margin: "0 0 0 9px" } : {}}
                          key={title + index}
                        >
                          <h3>
                            {title}{" "}
                            <button
                              className="underCheck"
                              onClick={() =>
                                navigate(
                                  `/${lang}/${product?.adv?.list?.checkoutBtn?.at(
                                    index
                                  )}`
                                )
                              }
                            >
                              <FaArrowRight />
                              {lang === "en" ? " Checkout" : " Проверить"}
                            </button>
                          </h3>
                          <ul>
                            {(lang === "en"
                              ? product?.adv?.list?.olListItem?.en
                              : product?.adv?.list?.olListItem?.ru)?.[
                              index
                            ]?.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>

                          {product?.adv?.list?.checkoutBtn?.at(index) && (
                            <button className="underCheck2" onClick={() => navigate(`/${lang}/${product?.adv?.list?.checkoutBtn?.at(index)}`)}>
                                {lang === "en" ? "Checkout" : "Проверить"}
                            </button>
                          )}
                        </li>
                      ))}
                    </ol>
                  </Fragment>
                </div>
              )}
            </div>
          )}

          {type === 2 && (
            <div className="full-info">
              {product?.videos?.map((vid, index) => (
                <video controls key={"vid" + index} preload="metadata">
                  <source src={vid} type="video/mp4" />
                </video>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export const productLoader = async ({ params }) => {
  const { id } = params;

  const routes = {
    "geobasalt-products": () =>
      import("../assets/product-data").then((m) => m.basalt_geobasalt),
    rockfiber: () =>
      import("../assets/product-data").then((m) => m.basalt_fiber),
    "basalt-quarry": () =>
      import("../assets/product-data").then((m) => m.basalt_quarry),
    "ecobasalt-group": () =>
      import("../assets/product-data").then((m) => m.basalt_ecobasalt),
    "goldfiber-pro": () =>
      import("../assets/product-data").then((m) => m.basalt_goldfiber),
    "basalt-wool": () =>
      import("../assets/product-data").then((m) => m.basalt_wool),
    "basfiber-trade": () =>
      import("../assets/product-data").then((m) => m.basalt_trade),
    "qoraqalpoq-basalt-wool": () =>
      import("../assets/product-data").then((m) => m.basalt_qqwool),
    "production-of-basalt-continuous-fiber": () =>
      import("../assets/product-data").then((m) => m.solFiber),
    "production-of-basalt-continuous-rockwool": () =>
      import("../assets/product-data").then((m) => m.solRockwool),
    "production-of-basalt-continuous-pipes": () =>
      import("../assets/product-data").then((m) => m.solPipes),
    "production-of-basalt-continuous-chopped-strand": () =>
      import("../assets/product-data").then((m) => m.solStrand),
    "production-of-basalt-continuous-reinforcement-bars": () =>
      import("../assets/product-data").then((m) => m.solBars),
    "production-of-basalt-continuous-geogrids": () =>
      import("../assets/product-data").then((m) => m.solGeogrid),
    "production-of-basalt-continuous-fabric": () =>
      import("../assets/product-data").then((m) => m.solFabric),
    furnace: () => import("../assets/product-data").then((m) => m.furnace),
    "platinum-rhodium-feeders-system": () =>
      import("../assets/product-data").then((m) => m.platinum),
    "burner-type-d": () =>
      import("../assets/product-data").then((m) => m.burnerTyped),
    "burner-type-h": () =>
      import("../assets/product-data").then((m) => m.burnerTypeh),
    winders: () => import("../assets/product-data").then((m) => m.winding),
    "plant-automation-system": () =>
      import("../assets/product-data").then((m) => m.pms),
    "measurement-and-control-equipments": () =>
      import("../assets/product-data").then((m) => m.control),
    scada: () => import("../assets/product-data").then((m) => m.scada),
    "monorail-loader-system": () =>
      import("../assets/product-data").then((m) => m.mls),
    "fls-1": () => import("../assets/product-data").then((m) => m.fls_1),
    "fls-2": () => import("../assets/product-data").then((m) => m.fls_2),
    "sizing-distribution-system": () =>
      import("../assets/product-data").then((m) => m.sds),
    "chemical-reactor": () =>
      import("../assets/product-data").then((m) => m.chr),
    "raw-materials-handling-system": () =>
      import("../assets/product-data").then((m) => m.rhms),
    "waste-water-treatment-and-supply": () =>
      import("../assets/product-data").then((m) => m.wwts),
    "compressed-air-system": () =>
      import("../assets/product-data").then((m) => m.cas),
    "water-cooling-systems": () =>
      import("../assets/product-data").then((m) => m.wcs),
    "product-drier-system": () =>
      import("../assets/product-data").then((m) => m.pds),
    "laboratory-complex": () =>
      import("../assets/product-data").then((m) => m.lab),
  };

  if (routes[id]) {
    return routes[id]();
  } else {
    throw data("Page not Found", { status: 404 });
  }
};
