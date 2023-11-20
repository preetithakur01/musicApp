import React from "react";
import Container from "@mui/material/Container";
import TwitterIcon from "@mui/icons-material/Twitter";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import DownloadIcon from "@mui/icons-material/Download";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import RadioIcon from "@mui/icons-material/Radio";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import "aos/dist/aos.css";
import AOS from "aos";
function Home() {
  AOS.init({
    duration: 2000,
    delay: 2,
  });

  return (
    <div>
      <div data-aos="fade-up">
        <img src="images/image1.jpg" alt="" width="100%" />
      </div>
      <Container maxWidth="xlg" sx={{ bgcolor: "#f4f6f8", pt: 4, pb: 4 }}>
        <Container fixed>
          <Grid container spacing={2}>
            <Grid item lg={6} data-aos="fade-right">
              <Typography className="icons" align="justify">
                <h2>
                  {" "}
                  <DesktopWindowsIcon /> Listen Everywhere
                </h2>

                <p>
                  Accessing your music has never been so easy: simply download
                  the Raaga app on your mobile or go to Raaga.com from your
                  browser and you are good to go.
                </p>
              </Typography>
            </Grid>

            <Grid item lg={6} data-aos="fade-left">
              <Typography className="icons" align="justify">
                <h2>
                  {" "}
                  <DownloadIcon /> Download all your music
                </h2>

                <p>
                  Say good bye to patchy internet connections and data overages.
                  With Raaga Premium, you can download all your music and listen
                  to them offline. No internet connection required! Your music
                  is always with you.
                </p>
              </Typography>
            </Grid>

            <Grid item lg={6} sx={{ pt: 3 }} spacing={2} data-aos="fade-down">
              <Typography className="icons" align="justify">
                <h2>
                  {" "}
                  <LibraryMusicIcon /> Download all your music
                </h2>

                <p>
                  Creat your own playlists perfect for parties, trips, and your
                  workout. Follow your favorite artists or connect with friends
                  to discover more music socially.
                </p>
              </Typography>
            </Grid>

            <Grid item lg={6} sx={{ pt: 5 }}>
              <Typography className="icons" align="justify">
                <h2>
                  {" "}
                  <RadioIcon /> Radio
                </h2>

                <p>
                  Listen to hours of 24/7 live radio in over 10 languages. Also
                  choose from our artists-based radio channels or a mood-based
                  channel.
                </p>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Container>

      <div className="mt-40"></div>
      <Container fixed>
        <Grid container spacing={2}>
          <Grid item lg={6} data-aos="fade-up-right">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Dlne8IDlC00"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <h3 className="clr">
              Whistle Baja 2.0 | Heropanti 2 | Tiger Shroff | Neeti Mohan |Mika
              Singh| A.R. Rahman
            </h3>
          </Grid>

          <Grid item lg={6} data-aos="fade-down-right">
            <ul>
              <div className="d-flex">
                <li>
                  {" "}
                  <iframe
                    width="280"
                    height="140"
                    src="https://www.youtube.com/embed/Dlne8IDlC00"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </li>
                <h4 style={{ paddingLeft: "30px" }}>
                  Whistle Baja 2.0 | Heropanti 2 | Tiger Shroff | Neeti Mohan
                  |Mika Singh| A.R. Rahman <br />
                  <br />{" "}
                  <span style={{ marginTop: "10px" }}> Hindi - 2:48</span>
                </h4>
              </div>
              <div className="mt-30"></div>
              <div className="d-flex">
                <li>
                  <iframe
                    width="280"
                    height="140"
                    src="https://www.youtube.com/embed/BoL3dRsYXSg"
                    Video
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </li>
                <h4 style={{ paddingLeft: "30px" }}>
                  Tutt Gaya | Shantanu Maheshwari | Ashnoor Kaur | Stebin Ben |
                  Gourov| Kunwar| Aditya <br />
                  <br /> <span style={{ marginTop: "10px" }}>Hindi - 5:07</span>
                </h4>
              </div>
            </ul>
          </Grid>
        </Grid>
      </Container>

      <div className="mt-30"></div>
      <div data-aos="zoom-in-up">
        <img src="images/image2.jpg" alt="" width="100%" />
        <img
          src="https://s.saregama.tech/image/s/0/f/d1/55/090920_usawbsite_carvaancherrywoodcarousel_original_1230x370_1611754051.jpg"
          alt=""
          width="100%"
        />
      </div>

      <div className="mt-30"></div>
      <Container
        maxWidth="xlg"
        sx={{ bgcolor: "#000000", pt: 4, pb: 4, color: "#fff" }}
      >
        <Container fixed data-aos="zoom-in-left">
          <Grid container spacing={2} className="footer">
            <Grid item lg={3}>
              <ul>
                <h4>MUSIC</h4>
                <li>New Release</li>
                <li>Popular</li>
                <li>Top 10</li>
                <li>Devotional</li>
                <li> Browse A-Z</li>
              </ul>
            </Grid>

            <Grid item lg={3}>
              <ul>
                <h4>RADIO</h4>
                <li>Moods</li>
                <li>Genres</li>
                <li>Actors</li>
                <li>Actress</li>
                <li> Music Directos</li>
              </ul>
            </Grid>

            <Grid item lg={3}>
              <ul>
                <h4>PLAYLIST</h4>
                <li>Themed Playlist</li>
                <li>Recent</li>
                <li>Popular</li>
              </ul>
            </Grid>

            <Grid item lg={3}>
              <ul className="footer-icons">
                <h4>CONNECT WITH US</h4>
                <li>
                  <FacebookIcon
                    fontSize="small"
                    style={{ color: "#3a559f", fontSize: "30px" }}
                  />
                </li>
                <li>
                  <InstagramIcon
                    fontSize="small"
                    style={{ color: "#c536a4", fontSize: "30px" }}
                  />
                </li>
                <li>
                  <TwitterIcon
                    fontSize="small"
                    style={{ color: "#50abf1", fontSize: "30px" }}
                  />
                </li>
                <li>
                  <LinkedInIcon
                    fontSize="small"
                    style={{ color: "#0077b7", fontSize: "30px" }}
                  />
                </li>
              </ul>
              <br />

              <li className="like-icon">
                <ThumbUpIcon
                  fontSize="small"
                  style={{ color: "#fff", fontSize: "15px", pl: "20px" }}
                  className="footer-icons"
                />{" "}
                <span style={{ color: "#fff", paddingLeft: "10px" }}>
                  {" "}
                  Like 500k
                </span>
              </li>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </div>
  );
}

export default Home;
