import React from "react";

import Button from "../Button/Button";
import image2021 from "../../Assets/images/2020-2021.png";
import image2012 from "../../Assets/images/2012-2013.png";
import image2013 from "../../Assets/images/2013-2014.png";
import image2014 from "../../Assets/images/2014-2015.png";
import image2015 from "../../Assets/images/2015-2016.png";
import image2016 from "../../Assets/images/2016-2017.png";
import image2017 from "../../Assets/images/2017-2018.png";
import image2018 from "../../Assets/images/2018-2019.png";
import image2023 from "../../Assets/images/SRIJAN 2022-23.png";
import image2024 from "../../Assets/images/2023-2024.png";
import first from "../../Assets/images/first.jpg";
import second from "../../Assets/images/second.jpg";

import image2011_12 from "../../Assets/images/image2011_12.png";
import image2010_11 from "../../Assets/images/image2010_11.png";
import image2009_10 from "../../Assets/images/image2009_10.png";
import image2008_09 from "../../Assets/images/image2008_09.png";
import image2007_08 from "../../Assets/images/image2007_08.png";
import image2006_07 from "../../Assets/images/image2006_07.png";
import image2003_04 from "../../Assets/images/image2004_05.png";
import image2002_03 from "../../Assets/images/image2002_03.png";

const EditionsCard = () => {
  const data = [
    {
      year: "2023-2024",
      imageSrc: image2024,
      link: "https://drive.google.com/file/d/1078JyEIw45q7blAeXCEuAZJugdzTYQ6n/view?usp=drive_link",
    },
    {
      year: "2022-2023",
      imageSrc: image2023,
      link: "https://drive.google.com/file/d/1rtChbl4X6n3TIwi-SKLvx9D5U8vlD8XM/view?usp=drive_link",
    },
    {
      year: "2021-2022",
      imageSrc: second,
      link: "https://drive.google.com/file/d/1lqy5vTkv4erXBLndVKP5PuBxHZ-To3NR/view?usp=sharing",
    },
    {
      year: "2020-2021",
      imageSrc: image2021,
      link: "https://drive.google.com/file/d/10sXlN12S37ILaF9AU_iMQhi62WTOsjuB/view?usp=drive_link",
    },
    {
      year: "2019-2020",
      imageSrc: first,
      link: "https://drive.google.com/file/d/1lmBbYQvnFDeM7KNqZ6L0J7RtadBBle4E/view?usp=sharing",
    },
    {
      year: "2018-2019",
      imageSrc: image2018,
      link: "https://drive.google.com/file/d/1SC6heWxbESkYuql8VBAyVUXlWZ8crl08/view?usp=drive_link",
    },
    {
      year: "2017-2018",
      imageSrc: image2016,
      link: "https://drive.google.com/file/d/1yIWkM0lmwmqvQ41xUenTqAfrXdhhb9Nr/view?usp=sharing",
    },
    {
      year: "2016-2017",
      imageSrc: image2017,
      link: "https://drive.google.com/file/d/1rag_ijpEnO93SxTg1v_vIi8VYBsSo-nC/view?usp=drive_link",
    },
    {
      year: "2015-2016",
      imageSrc: image2015,
      link: "https://drive.google.com/file/d/16JFaMYJt0x35Acq01O2gJOiATgJW0HfG/view?usp=sharing",
    },
    {
      year: "2014-2015",
      imageSrc: image2014,
      link: "https://drive.google.com/file/d/1BUy7ScwXkJFqNw3QihAVA4hq3WLVrpjL/view?usp=drive_link", 
    },
    {
      year: "2013-2014",
      imageSrc: image2013,
      link: "https://drive.google.com/file/d/1hsNBeEViLlstC6ZNfE7RfR9C0x06MZm4/view?usp=sharing",
    },
    {
      year: "2012-2013",
      imageSrc: image2012,
      link: "https://drive.google.com/file/d/1RO-AwEmqNj-51YbZ9_tO4o8-bPjx0Qxn/view?usp=drive_link",
    },

    {
      year: "2011-2012",
      imageSrc: image2011_12,
      link: "https://drive.google.com/file/d/1SaFhjhXuMsZgiFB4p8quU6pf5exc_XzU/view?usp=drive_link",
    },
    {
      year: "2010-2011",
      imageSrc: image2010_11,
      link: "https://drive.google.com/file/d/1vdLh-nVH4Fi5PpH7BhDyeA5FgPYDrrWj/view?usp=drive_link",
    },
    {
      year: "2009-2010",
      imageSrc: image2009_10,
      link: "https://drive.google.com/file/d/1qYQL512OfGRc8-hGJEYqbDOEdAiI5JDG/view?usp=drive_link",
    },
    {
      year: "2008-2009",
      imageSrc: image2008_09,
      link: "https://drive.google.com/file/d/1qXG2mBkrUTkn0qdZnoxj-YjXmU-tWoaH/view?usp=drive_link",
    },
    {
      year: "2007-2008",
      imageSrc: image2007_08,
      link: "https://drive.google.com/file/d/1qUEFGM8sJR1Kb7XDt89RD5MGaWU0Pr03/view?usp=drive_link",
    },
    {
      year: "2006-2007",
      imageSrc: image2006_07,
      link: "https://drive.google.com/file/d/1qU9o3PY-TXl98FeJZxVR7URapVeHedIg/view?usp=drive_link",
    },
    // {
    //   year: "2005-2006",
    //   imageSrc: image2005_06,
    //   link: "https://drive.google.com/file/d/1RO-AwEmqNj-51YbZ9_tO4o8-bPjx0Qxn/view?usp=drive_link",
    // },
    {
      year: "2003-2004",
      imageSrc: image2003_04,
      link: "https://drive.google.com/file/d/1CrBkQs3mmRQkkIipD9uovMYMwukRw5fE/view?usp=drive_link",
    },
    {
      year: "2002-2003",
      imageSrc: image2002_03,
      link: "https://drive.google.com/file/d/1d-OdvMEOKGPehQRtQlf4wPDnIwDdwpiM/view?usp=drive_link",
    },
  ];

  return (
    <>
      {data.map((data) => {
        return (
          <div className="card-component" key={data.year}>
            <div className="product">
              <img src={data.imageSrc} alt="" />
            </div>
            <h1>SRIJAN {data.year}</h1>
              <a style={{ textDecoration: "none" , color : "black"}} href={data.link} target="_blank">
                <Button className="button--big" >
                  Read Now
                </Button>
              </a>
          </div>
        );
      })}
    </>
  );
};

export default EditionsCard;
