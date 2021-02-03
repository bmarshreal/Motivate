import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MediaQuery from "react-responsive";

function SlideIns(props) {
  return (
    <div style={{ backgroundColor: "#fdfbf3" }}>
      {props.filteredQuotes.map((indexedQuotes, index) => (
        <ul id="slideContainer" key={indexedQuotes.myId}>
          {index < 1 ? (
            <Container className="slideBackgroundLeft" fluid>
              <li className={props.scrollingPoint ? "leftSlide" : "hidden"}>
                {/* {indexedQuotes.myId + " ... "} */}

                <div className="leftSlideCluster">
                  <Row>
                    <Col>
                      <img
                        className="leftSlideImg"
                        src={props.photos[0]}
                        alt="randomPic"
                      ></img>
                    </Col>
                    <Col>
                      {/* <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN8AAADiCAMAAAD5w+JtAAAAilBMVEX/////7AD/6wD///r///z//vb//vH//vT/+s7/+Lj/+9f//e3//ej/+cH//vL//OT//Nz/+9P/9Iz/7jb/84H/+sv/96r/9qH//OD/97L/9ZT/83v/70n/9Zr/97P/+cf/8Fn/8Wf/8Wv/7jH/8FP/7jT/8nX/8Wr/9JD/7SH/70z/9qX/+b7/8FdBl9gnAAARNUlEQVR4nO1da3uquhKGQa2KVgW0Xqto6yq1/f9/7yQBgdwDBHH3Oe+XvZeVmCHJ3GfiOP+HIabjrmfQLjy4bLqeQ6tYALirrifRJnbgQvKHd6kHrutC0PU02sOBEBh6Xc+jLZAFRPC7nkhb2GUETrqeSEtYZPS5g65n0hIy8tyk64m0hDijD+KuZ9IODvcNCqOup9IKRnf6XPiTUmJZ0Lfrei5tIGegiMC/KAWXJfqsL+CL7QGrozh/LZzAJ+DJhzJ9lo2lHqztDlgDsVvC3u7YUzjYHbAGyuS58Gp17Bi+rY5XA2Og6LMq4/vIerY5Xh1ENH1WOegW0TezOWANuDRCy2PD1OaA1bEBmj6b+ykA+xy5Kpjlc8GenTsjro+ttfHqYAUsfQtrYydkvE59Vz12+Syelxi6p2/HLp89AXFNh+6UvjFHngvvdoaOs6E7VWASjjxL9M0uYPl91cEbv3xW9mcvKJlcw+bj1QVPHZrPj+TL3txw1EkAZYvErkJbBT+C5ZPT53zvDUTH/G0P9LA2Z1wNZ+H6SfWNNcBJbo774+ktQrSx6lCHLh0Rea57lX5/7wIchX95PwGB4HV1p36+iranykXxjtXJN/7zrYiw+2htUqCGQPiRGZ1lD7wQfZKVZ0tXTp0L8t3QOpaSeck1jk/yZ1qABArq0JdNmW4LOMpmJl3BVJujLNaTkjz34xGESDCUTg0SsSTI9IFL8YmGvC6Xz5mrzs1ZJAkyW7gQIVcNedKj/Ai8qCYH8NXjnni/P5H9m7X9uUG6jddoJsdL+rsxnLEYX0eeVBV6DGL19Fy4ML6vnFemXuBvzeMdygYCzjfBT5Fewo/8c3w6ZfLlDqueuDrQ7S9uDYpAId55oebZ7oOlmg1GKDkVXy8EJkRq9ovxBOkYU/0Clnl8XHz6zfq9uceeIlIq8E/wM71r1JMyQWru21W+1/Dt+hGG39fDMv23jkWkk81CeKfyZ8rD2w3nHP7LLTT0PzGx5P6ZEJgyQmozgyfVXtEfu8iZPSaMlQYJltJGOxTbqAM6zNSX6y7dKJ3DVcz5Di5zxzegjywg/SLAkwrPDnXqUchSGJgIQWwRXZhPqKg99ZdOA9LLhNmke6d30asxB3Yfg9Su7ToHihVb8Oqwq8rjA0diy7g4seSrnWtlI5Ya34DJsMbwOfVVCNCpyUfAaS1eX0cevPRp9nlzZGvetdHg8GGHUOZKK+hZM1kk67XsiX9dU+eU7JxstpGUG96/sWAYqHOTPdB5vovDG0YwZvk/T1/ZGoIv9hUVeIosZ5aJXjQ7FL0Air6BJ9deeLdNfSxuu2/M/JL99W1ZQfBM2AWcUtozP+l1mcfCTr497akv3uZUDmmg/93fjGNte2ZWe24BoQQsJMt/8hQSxVK8dnYVBDWQVWCY3cG+f2SOfpaGAfdjd9hMh4vFYvmz2l4vSL0u3uSRl6GlkSIL1PmcrpwPbxKE5J0LyKTJSAYIv468b8EbRZkBghVMKXWuFQYaSIJt6QRPJp4Plr6IZBuhDTDq37/S82fz+XxWjDa5hehn33Suieb0Oc7Lerr9lq6hQcoX+8wv+gguq5RH9Y+Hc1icQHe/u2W7YhIcFYGZ9Ndt0EfQ+/mQhPBOwu/707fgeo0OP77jbD7pR5FavEszHYbBhY8yY+51yPwUGseZ1YSCWSz8MUg499UQnx/CCxGSQ98Z78uPZmr/PHLlGx89Rob9SVQUWvacDcXhU6BqTl8OzLQBdp4zLb0PsnbI/tWsDZzIF2+qiLRtz6B4k5YO4fAslCUbp/ed8UySw7hSBZqL50Lse+uL9w35Qp+d4HjZjMCzmMA9Hvb1GMmmjU8pjshCgsMoUyPq0oHxQRQmz5A/c/P7bZoCKnmZ2WGTTzQZYFGDM1R8CaeSPIhl+KvE7L+wsxtL2F0F6EIdUkycM3ZW6iNJDIEulhd8ciUGZ+BemovEQcX5FRMlPF8TRRc++CV5LZz+GdmoEai6ADlmOE26zsPw3RMGaIAJ3GNV1YLIl7l7NHgxjEGICMQl5XwOxomeF9F1LNBXb5YvAndaBQrXPIFMenq6r2yobHVYjK9PgVATOOe26G95Tl7G2G34LKTySDm7BqtHhpgxR7+svPQP94NtxadWeW6j+mevwIASE1gnSmczGRUmKtxs0Kc2ynjydlmBSTPgrZcfDSz3Q0jCMKHUCjs1jjofLYOLqLijOrBucnc34lC9yJFqyWVYbV6TWmJdMNDbnUnh1RNlLNiqsKqyQbETpbZOwAy1ThNNMBni82yHPG1CShmJUXZPhbEgWUu4sb0COanPnP/NoVFyj+FgaC8EOOdXrG/bCwias8MPs9weUwKJ0FuIvRYW6wmF9TbC35xzDsJG9MVI3slcXVbrA+ReAwona8wlI2Lt9CTkCcoJmuDXyIWyqK7tqBE7bICeJs/zJz7nlqkFsS+Gxmcp09gO0CETVYsQW/cY7FNXsRtGP82TKwySVjeOJpxZnb5IkA0M7tiZRGVNDf3/uXH4zP/WBdN7VXU5AwJ5rz3mOhHvGoBTY//2ki1RoxHLJFUT+kZsH4tkiN6iWGI0Z6nEzZ4qhZmHsIg44dxiy9S5xK4tXhpA+KN4iVaY6mwUnE+n62E6y2JC8yyCB54Fs4+fs+essyI5CLdIV3tT+Itt9jSYTVfbIDhsFpjMdQCwr2wqGtFHah1mw+MQG3uDrdobbqkyYn3Yl6Lo4RsWQcGXWdJnVfqKOs3ZShqZtErg6sJmtGaVb7W9wSogK2J1DaIzX6IqJrDpFhVGg1K/ukXVujT0i/NjRlr2/UZ9DdayECRWKYSqVFMgk6uaOwe+62tsCiXmW193VAvYSVY1SlO3lYCCP2JNyrJyVgxclW9ByDU3GBvkV6pKYrFsbWN7EqPrt/JDcLmVPMKLbWLQzkGpYaM90W+HvovjXGs8hljSv+1ttTrsiCzTcx31KYcll1xnC7paajny5gBg0F5OHWhBtm0VP1sVWGDMBp5gTcQExvaNo2xkc/+PFAYSI+NheW4VNQWE56UPEgPrPo2Xutf3sf8yWE+DXEdD/40PP4u51yJ9mixuzfO/eupIzxPYl5t8zIgNDRClCU2vyI55yvNnWNcDWapVCf0dSWpEev0VrebUnmOeQRO7Cz7NYmhzoQAZ9p3XQ5qeivRPeW54I4SShjkGANc0qXkjtqu8XX4MNdm39RGrQxoAH7HQdkKGadOU7VEpeXrXINtJBbxxFH/NVmicWtw5aQCf28bRXcrR811PjdLTt5H56F2XTrgdb4LzRxiG+zi6DS14tZkwrQUxLCRBoRi12qOPibmAr2j80oS+ntTp32pJJytzkYBohYGGUvFAUvHaAifM8V5pgcHgYcXmbbsd0HhSklYcMMjuErvlmie3qiCwJtABbMFCAknMDdrtMCVqgLlqQ8KfxW6rlu8EEVaaIBv5y3r8aCnkWm03bxUW9aENat9FIdqe0HbzQbEnCYsj81QZI+AhuTYBcG271F/mq7CRGEmTgtSs0YkORZ/bb8wusVdw8Maqjxf7dieO05tG91SC8/sj2jTI5nPR1bhVpe8VCb+P1DTr+5NHdV6SOlrwubeow2Auie8RhI/tdO4P/EddJyh3tybVsg11yJMRM6fdg1pCK974ymIOBQ4D0YKILyFrA6ojhru0WCIPJyOy7NjyLS5iKL0h/1T9PysBLxYn+h5wLZCmCnhaPxxCD3QUdulvnUBtT5c+38WgDnlYw4wFn4ft9i33dbFUQELQa07eCf+YUBC1eTHJQssc004OjV3Zn2iQm6TSAJJViY/a0mdm71GozdOAfaYcNoxFJD3sv5rLWt0C7L9Gw/HiuIoSK9dmDHeuSQ4KKQgaBjgO00jM44AWdir15bz4Hqez4ITx3uS1+TTGJP0NSKLyujZ18NnLXDmITnX5mgUnTO/LOHnIz3uq42yFgbIbgWbOmacqGSilqQXyzIrzCQYlwUcs7Eq14fmTWDAUHs+lM9hL92hjL4V8bP7HZpRHm0QGa8RdyUUJpYGwCTgSvmNwG7YvqJQwhxaM7vlJ+s/OK+5R+EWc/5XySJAI0TubsohOeXPnfIXXj/gY6ztL+w1UcfmCi01ZTv+DZIPY1fbzHgAjTVUstDqtEhVOOFUffIdoGr5h7cs9i1SkQQBEiCN7wxVOjY6jt6UNO6mKloz4JfvJ1rmi14yLoHD+tAF1ES7gP0rYGXa9iK8wqYtKhUQnvuN/KuHTNZkI6hXo6bsHvCQTZeUnuBb771ZKZgGfTU5D7DM1EyFL2h/9yhQg9PmVcEJfr9yG1oriKlCH9yLr0AYvV9AAtsSk8aa7hMl8ItnpQZp3Mhc1XuN/ytItbZoLJujf3PO5haeyj/TeNNpxXoar6BS6qTIbxsFmnJa1ext9r9dsLCsx2yraMSSC5rQbxrUA7m4qvx/IhAHlI9m4t7GCAQ5hT3QZJacaYKEV/DC+dW++OQ+Nau9KAzXnMgv2kCh+DaspnA4MYuFJWoh9XKPtFnOTc+p0D6oGLZp3krxzC3z8z8H2K4oTMZGQnndGVOJaHZUbG3DwNdfmkuqJ2w3Jy53GUZFS11scuCZm6AvpmdrTn375Gv6LFJsiUoiWo2LiTFO7gfwcuFx3Dv9WUnPR/33dXVnUdg4wS5SnHJHvLEp6KVw13xY836zVG95bknab8yDMWiN+FQ11St4k0m7AkUVA82+9luNoMKi8gI28EmRuim6fg8mE1m8LaZLnqatTfYD++7lyBUejZrxHgM9KCnquy5UuLVfPjxawSDuv6I5qFEnaVr1bfV5ihXeow4CsSPAUjYWFaOKmj6tGae7aWfkCOKWuDKxnoHrtZwP6jPLNy8jYH5XvpiyXAHb9cNipUlSmSbPT6sZxks26PIiSvglz3ojWXKXn1mMv87gWpmwOVV9vODKO97TZycC8sZHF28gNQJzMTDcrpV/2wPDXO2Mam1oSD76MhUyK+UzFQT+Y5S2KD19X0ithKfoee0sXZn5sgaRyAZnudLTROpvevqJrvFfEdB58PSzS0PhmcooTCEcqaVUqrtcbyZH8bJkgFoEgp09yzy/Bmb4XQVGVPxGGCE7tkSIGCDiaoockUNJA3XVAsISPv316LuJoimbPK4f+lwqCx1vObxVgJShQVuQZhGWNUzNdQYarDSdTRYhMFnkACl7KNpFG4+Wf7oA+IaT5vHAs66Cay7c487eD/SmGNI8CH7nCiaxxS3P+iy5vt6chE4LE2Ch2qKaZIGdbnB4wdSPITmDair28XVXg3R2Pmb0eMkdMFjjL/62pwGdPINvtuzvI9mfKAf17gF53oth7EFuugDCHbP3uIv3ux9aEFVhG9QTXyRHIKlqKfiXHbAk1S8LsUKvXdTWALH+ifICy60s0QoJW9mw3yKwLMXUsP5msSARHfQaZEGibszaG9DZUgQLyMlAb5T3KyW3lvq6mkLrpa/lPPDqxSd9xqHVI6wG5y1TMQGfsdX5TujTuVTsNgn5hXd90Lw0q1O8cv6ASnDpeQVnUq5F39lB2qj3UzctCFvRqyPr6pSaZnRq6Etlu0qxLg5+8phMuj6qa4yH2YIOdxvHDQ5xeXAfxQ6rKeIiFn9UKIu910J2hJErbMe8Y9PwQJEU8jV/IBrgQNYTtl3Y/EGxXy6dxWloCwz4fG3J9ABjtxfb1mZ2Doi7pSEi1CGr9nsafZw+l8/fgdIDHoHDNt9rIqzMUGVc1rfUnRx6ehsaFbE+J3Pz7m8uXu+bbLFjvFFkJy4NzjR6HLPb3V7dnpsE8TyzZOoi38s8ePydtr/A8oUj7wHkBzxAnaAv4JlXozoHXPkbw9+xaCifQpH78x9FrVmvy/Jj9NbcSi+Gp6xm0jL9ouz8j/gejEubE5s14DQAAAABJRU5ErkJggg=="
                        alt="backgroundImg"
                        className="slideBackgroundLeft"
                      /> */}
                      <p className="leftSlideInAuthor">
                        Motivational Quote by{" "}
                        {indexedQuotes.author === null
                          ? (indexedQuotes.author = " Unknown Author...")
                          : indexedQuotes.author}
                      </p>
                      <p className="leftSlideText">{indexedQuotes.text}</p>
                    </Col>
                  </Row>
                </div>
                <hr></hr>
              </li>
            </Container>
          ) : (
            <Container fluid>
              <li className={props.scrollingPoint ? "rightSlide" : "hidden"}>
                {/* {indexedQuotes.myId + " ... "} */}

                <div className="rightSlideCluster">
                  <Row>
                    <MediaQuery query="(max-device-width: 500px)">
                      <Col>
                        <img
                          className="rightSlideImg"
                          src={props.photos[1]}
                          alt="randomPic"
                        ></img>
                      </Col>
                      {/* //Insert any components/html here that you want rendered
                      thats below 1024px */}
                    </MediaQuery>
                    <Col>
                      <p className="rightSlideInAuthor">
                        {" "}
                        Motivational Quote by{" "}
                        {indexedQuotes.author === null
                          ? (indexedQuotes.author = " Unknown Author...")
                          : indexedQuotes.author}
                      </p>
                      <p className="rightSlideText">{indexedQuotes.text}</p>
                    </Col>
                    <MediaQuery query="(min-device-width: 500px)">
                      <Col>
                        <img
                          className="rightSlideImg"
                          src={props.photos[1]}
                          alt="randomPic"
                        ></img>
                      </Col>
                      {/* //Insert any components/html here that you want rendered
                      thats below 1024px */}
                    </MediaQuery>
                  </Row>
                </div>

                <hr></hr>
              </li>
            </Container>
          )}
        </ul>
      ))}
    </div>
  );
}

export default SlideIns;
