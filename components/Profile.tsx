import Image from "next/image";

import profileStyles from "../styles/profile.module.scss";
import badgesStyles from "../styles/badges.module.scss";

export default function Profile() {
  return (
    <div id={profileStyles.profile}>
      <Image
        src="/images/perfil.png"
        alt="Perfil"
        id={profileStyles.profilePicture}
        width="100"
        height="100"
      />
      <h1>Danilo Macedo Bakun</h1>

      <ul>
        <li>
          Desenvolvedor FullStack
          <span className={`${badgesStyles.badge} ${badgesStyles.JavaScript}`}>JavaScript</span>
        </li>
        <li>
          Stack
          <span className={`${badgesStyles.badge} ${badgesStyles.React}`}>React</span>+
          <span className={`${badgesStyles.badge} ${badgesStyles.Node}`}>Node</span>
        </li>
        <li>
          Usuário de distros
          <span className={`${badgesStyles.badge} ${badgesStyles.Linux}`}>Linux</span>
          baseadas em
          <span className={`${badgesStyles.badge} ${badgesStyles.Ubuntu}`}>Ubuntu</span>
        </li>
      </ul>
    </div>
  );
}
