import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import socialsStyles from "../styles/socials.module.scss";

export default function Socials() {
  return (
    <div id={socialsStyles.socials}>
      <a href="https://github.com/danilomacb">
        <FontAwesomeIcon icon={faGithub} size="lg" />
      </a>
      <a href="https://www.linkedin.com/in/danilomacb">
        <FontAwesomeIcon icon={faLinkedin} size="lg" />
      </a>
      <a href="https://www.facebook.com/danilomacb">
        <FontAwesomeIcon icon={faFacebook} size="lg" />
      </a>
      <a href="https://twitter.com/danilomacb">
        <FontAwesomeIcon icon={faTwitter} size="lg" />
      </a>
      <a href="mailto:danilo.macb@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} size="lg" />
      </a>
    </div>
  );
}
