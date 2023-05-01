import "./style.css";

export function Price() {
  const data = [
    {
      title: "FREE",
      price: "0",
      data1: "Single User",
      data2: "5GB Storage",
      data3: "Unlimited Public Projects",
      data4: "Community Access",
      data5: "Unlimited Private Projects",
      data6: "Dedicated Phone Support",
      data7: "Free Subdomain",
      data8: "Monthly Status Reports",
    },
    {
      title: "PLUS",
      price: "9",
      data1: "5 User",
      data2: "50GB Storage",
      data3: "Unlimited Public Projects",
      data4: "Community Access",
      data5: "Unlimited Private Projects",
      data6: "Dedicated Phone Support",
      data7: "Free Subdomain",
      data8: "Monthly Status Reports",
    },
    {
      title: "FREE",
      price: "49",
      data1: "Unlimited  User",
      data2: "150GB Storage",
      data3: "Unlimited Public Projects",
      data4: "Community Access",
      data5: "Unlimited Private Projects",
      data6: "Dedicated Phone Support",
      data7: "Unlimited Free Subdomain",
      data8: "Monthly Status Reports",
    },
  ];

  return (
    <div className="container">
      <div className="over">
        <div className="row">
          {data.map((e) => {
            console.log(e.price);

            return (
              <div className="col-lg-4">
                <div className="card-body p-5">
                  <h5 className="card-title text-center">
                    <p className="text-muted">{e.title}</p>
                    <p>
                      <span className="text">${e.price}</span>
                      <sub>/month</sub>
                    </p>
                    <hr></hr>
                  </h5>
                  <p className="card-text">
                    <i class="fa fa-check p-2" aria-hidden="true"></i>
                    {e.data1}
                  </p>
                  <p className="card-text">
                    <i class="fa fa-check p-2" aria-hidden="true"></i>
                    {e.data2}
                  </p>
                  <p className="card-text">
                    <i class="fa fa-check  p-2" aria-hidden="true"></i>
                    {e.data3}
                  </p>
                  <p className="card-text">
                    <i class="fa fa-check p-2" aria-hidden="true"></i>
                    {e.data4}
                  </p>
                  <p className={e.price ==9 || e.price ==49 ? "card-text" : "card-text text-muted"}>
                    {e.price == 49 || e.price == 9 ? (
                      <i class="fa fa-check p-2" aria-hidden="true"></i>    
                    ) : (
                      <i class="fa fa-times p-2" aria-hidden="true"></i>
                    )}
                    {e.data5}
                  </p>
                  <p className={e.price ==9 || e.price ==49 ? "card-text" : "card-text text-muted"}>
                    {e.price == 49 || e.price == 9 ? (
                      <i class="fa fa-check p-2" aria-hidden="true"></i>
                    ) : (
                      <i class="fa fa-times p-2" aria-hidden="true"></i>
                    )}
                    {e.data6}
                  </p>
                  <p className={e.price ==49 || e.price==9 ? "card-text" : "card-text text-muted"}>
                    {e.price == 49 || e.price==9 ? (
                      <i class="fa fa-check p-2" aria-hidden="true"></i>
                    ) : (
                      <i class="fa fa-times p-2" aria-hidden="true"></i>
                    )}
                    {e.data7}
                  </p>
                  <p className={e.price ==49 ? "card-text" : "card-text text-muted"}>
                    {e.price == 49 ? (
                      <i class="fa fa-check p-2" aria-hidden="true"></i>
                    ) : (
                      <i class="fa fa-times p-2" aria-hidden="true"></i>
                    )}
                    {e.data8}
                  </p>
                  <div className="text-center">
                    <button type="button" className="btn btn-outline-primary ">
                      Button
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
