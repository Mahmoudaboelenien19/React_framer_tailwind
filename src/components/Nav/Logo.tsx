import { MotionValue, motion } from "framer-motion";
type Props = {
  fill: MotionValue;
  scale: MotionValue;
};
const Logo = ({ fill, scale }: Props) => {
  return (
    <motion.svg
      style={{ scale }}
      width="194"
      height="64"
      viewBox="0 0 194 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="origin-left  transition"
    >
      <path
        d="M22.8638 54.273L31.881 36.2386C31.9301 36.1405 32.0704 36.1405 32.1194 36.2386L41.1365 54.273C41.1957 54.3909 41.0658 54.5138 40.9512 54.4485L32.0664 49.3714C32.0253 49.348 31.9752 49.348 31.9341 49.3714L23.0493 54.4485C22.9347 54.5138 22.8048 54.3909 22.8638 54.273Z"
        stroke="#ED1D24"
        strokeWidth="2.75"
        strokeLinecap="round"
      />
      <motion.path
        style={{ stroke: fill }}
        d="M54.6667 49.333L44 9.33301"
        strokeWidth="2.75"
        strokeLinecap="round"
      />
      <motion.path
        style={{ stroke: fill }}
        d="M9.3335 49.333L20.0002 9.33301"
        strokeWidth="2.75"
        strokeLinecap="round"
      />
      <motion.path
        style={{ stroke: fill }}
        d="M32 28.0003V22.667"
        strokeWidth="2.75"
        strokeLinecap="round"
      />
      <motion.path
        style={{ stroke: fill }}
        d="M32 14.6663V9.33301"
        strokeWidth="2.75"
        strokeLinecap="round"
      />
      <motion.path
        d="M82.528 36H79.04C77.3547 36 76.0533 35.552 75.136 34.656C74.2187 33.76 73.76 32.4693 73.76 30.784V20.64C73.76 18.9547 74.2187 17.664 75.136 16.768C76.0533 15.872 77.3547 15.424 79.04 15.424H82.528C84.192 15.424 85.4827 15.8827 86.4 16.8C87.3387 17.696 87.808 18.976 87.808 20.64V22.144C87.808 22.6133 87.5733 22.848 87.104 22.848H84.416C83.968 22.848 83.744 22.6133 83.744 22.144V20.832C83.744 20.1493 83.5947 19.6693 83.296 19.392C83.0187 19.0933 82.5387 18.944 81.856 18.944H79.68C79.0187 18.944 78.5387 19.0933 78.24 19.392C77.9627 19.6693 77.824 20.1493 77.824 20.832V30.592C77.824 31.2747 77.9627 31.7653 78.24 32.064C78.5387 32.3413 79.0187 32.48 79.68 32.48H81.856C82.5387 32.48 83.0187 32.3413 83.296 32.064C83.5947 31.7653 83.744 31.2747 83.744 30.592V29.28C83.744 28.8107 83.968 28.576 84.416 28.576H87.104C87.5733 28.576 87.808 28.8107 87.808 29.28V30.784C87.808 32.448 87.3387 33.7387 86.4 34.656C85.4827 35.552 84.192 36 82.528 36ZM93.4427 36H90.3708C89.9868 36 89.8588 35.776 89.9868 35.328L95.0428 16.096C95.1921 15.648 95.5121 15.424 96.0028 15.424H100.259C100.792 15.424 101.112 15.648 101.219 16.096L106.275 35.328C106.403 35.776 106.275 36 105.891 36H102.819C102.584 36 102.424 35.9573 102.339 35.872C102.253 35.7653 102.189 35.584 102.147 35.328L101.251 31.808H95.0108L94.1148 35.328C94.0721 35.584 93.9974 35.7653 93.8908 35.872C93.8054 35.9573 93.6561 36 93.4427 36ZM98.0828 19.296L95.7788 28.544H100.515L98.2108 19.296H98.0828ZM112.503 36H109.783C109.335 36 109.111 35.776 109.111 35.328V16.096C109.111 15.648 109.335 15.424 109.783 15.424H117.399C119.063 15.424 120.365 15.8827 121.303 16.8C122.242 17.7173 122.711 19.008 122.711 20.672V23.168C122.711 25.5787 121.762 27.1787 119.863 27.968V28.096L123.287 35.232C123.479 35.744 123.298 36 122.743 36H120.151C119.767 36 119.49 35.9573 119.319 35.872C119.149 35.7867 119.01 35.6053 118.903 35.328L115.703 28.416H113.559C113.303 28.416 113.175 28.5333 113.175 28.768V35.328C113.175 35.776 112.951 36 112.503 36ZM113.527 25.152H116.663C117.346 25.152 117.847 25.0133 118.167 24.736C118.487 24.4373 118.647 23.968 118.647 23.328V20.832C118.647 20.1707 118.487 19.6907 118.167 19.392C117.847 19.0933 117.346 18.944 116.663 18.944H113.527C113.293 18.944 113.175 19.0613 113.175 19.296V24.8C113.175 25.0347 113.293 25.152 113.527 25.152Z"
        style={{ fill }}
      />
      <path
        d="M137.811 36H127.283C126.835 36 126.611 35.776 126.611 35.328V16.096C126.611 15.648 126.835 15.424 127.283 15.424H130.003C130.451 15.424 130.675 15.648 130.675 16.096V32.096C130.675 32.3307 130.803 32.448 131.059 32.448H137.811C138.238 32.448 138.451 32.6827 138.451 33.152V35.328C138.451 35.776 138.238 36 137.811 36ZM143.13 36H140.058C139.674 36 139.546 35.776 139.674 35.328L144.73 16.096C144.88 15.648 145.2 15.424 145.69 15.424H149.946C150.48 15.424 150.8 15.648 150.906 16.096L155.962 35.328C156.09 35.776 155.962 36 155.578 36H152.506C152.272 36 152.112 35.9573 152.026 35.872C151.941 35.7653 151.877 35.584 151.834 35.328L150.938 31.808H144.698L143.802 35.328C143.76 35.584 143.685 35.7653 143.578 35.872C143.493 35.9573 143.344 36 143.13 36ZM147.77 19.296L145.466 28.544H150.202L147.898 19.296H147.77ZM162.127 36H159.471C159.023 36 158.799 35.776 158.799 35.328V16.096C158.799 15.648 159.023 15.424 159.471 15.424H161.871C162.319 15.424 162.617 15.5733 162.767 15.872L169.231 28H169.359V16.096C169.359 15.648 169.583 15.424 170.031 15.424H172.687C173.135 15.424 173.359 15.648 173.359 16.096V35.328C173.359 35.776 173.135 36 172.687 36H170.351C169.881 36 169.54 35.7867 169.327 35.36L162.927 23.456H162.799V35.328C162.799 35.776 162.575 36 162.127 36ZM181.934 32.48H185.422C186.104 32.48 186.584 32.3413 186.862 32.064C187.16 31.7653 187.31 31.2747 187.31 30.592V20.832C187.31 20.1493 187.16 19.6693 186.862 19.392C186.584 19.0933 186.104 18.944 185.422 18.944H181.934C181.699 18.944 181.582 19.0613 181.582 19.296V32.128C181.582 32.3627 181.699 32.48 181.934 32.48ZM177.518 35.328V16.096C177.518 15.648 177.742 15.424 178.19 15.424H186.094C187.758 15.424 189.048 15.8827 189.966 16.8C190.904 17.696 191.374 18.976 191.374 20.64V30.784C191.374 32.448 190.904 33.7387 189.966 34.656C189.048 35.552 187.758 36 186.094 36H178.19C177.742 36 177.518 35.776 177.518 35.328Z"
        fill="#ED1D24"
      />
      <motion.path
        style={{ fill }}
        d="M76.052 50H75.032C74.864 50 74.78 49.916 74.78 49.748V42.536C74.78 42.368 74.864 42.284 75.032 42.284H77.888C78.512 42.284 79 42.456 79.352 42.8C79.704 43.144 79.88 43.628 79.88 44.252V45.188C79.88 46.092 79.524 46.692 78.812 46.988V47.036L80.096 49.712C80.168 49.904 80.1 50 79.892 50H78.92C78.776 50 78.672 49.984 78.608 49.952C78.544 49.92 78.492 49.852 78.452 49.748L77.252 47.156H76.448C76.352 47.156 76.304 47.2 76.304 47.288V49.748C76.304 49.916 76.22 50 76.052 50ZM76.436 45.932H77.612C77.868 45.932 78.056 45.88 78.176 45.776C78.296 45.664 78.356 45.488 78.356 45.248V44.312C78.356 44.064 78.296 43.884 78.176 43.772C78.056 43.66 77.868 43.604 77.612 43.604H76.436C76.348 43.604 76.304 43.648 76.304 43.736V45.8C76.304 45.888 76.348 45.932 76.436 45.932ZM97.8785 50H93.9545C93.7865 50 93.7025 49.916 93.7025 49.748V42.536C93.7025 42.368 93.7865 42.284 93.9545 42.284H97.8785C98.0385 42.284 98.1185 42.368 98.1185 42.536V43.352C98.1185 43.52 98.0385 43.604 97.8785 43.604H95.3705C95.2745 43.604 95.2265 43.648 95.2265 43.736V45.296C95.2265 45.384 95.2745 45.428 95.3705 45.428H97.4225C97.5905 45.428 97.6745 45.512 97.6745 45.68V46.496C97.6745 46.664 97.5905 46.748 97.4225 46.748H95.3705C95.2745 46.748 95.2265 46.792 95.2265 46.88V48.548C95.2265 48.636 95.2745 48.68 95.3705 48.68H97.8785C98.0385 48.68 98.1185 48.764 98.1185 48.932V49.748C98.1185 49.916 98.0385 50 97.8785 50ZM113.053 50H112.057C111.889 50 111.805 49.916 111.805 49.748V42.536C111.805 42.368 111.889 42.284 112.057 42.284H112.957C113.125 42.284 113.237 42.34 113.293 42.452L115.717 47H115.765V42.536C115.765 42.368 115.849 42.284 116.017 42.284H117.013C117.181 42.284 117.265 42.368 117.265 42.536V49.748C117.265 49.916 117.181 50 117.013 50H116.137C115.961 50 115.833 49.92 115.753 49.76L113.353 45.296H113.305V49.748C113.305 49.916 113.221 50 113.053 50ZM133.572 50H132.564C132.388 50 132.3 49.916 132.3 49.748V43.736C132.3 43.648 132.256 43.604 132.168 43.604H130.8C130.632 43.604 130.548 43.52 130.548 43.352V42.536C130.548 42.368 130.632 42.284 130.8 42.284H135.336C135.504 42.284 135.588 42.368 135.588 42.536V43.352C135.588 43.52 135.504 43.604 135.336 43.604H133.968C133.872 43.604 133.824 43.648 133.824 43.736V49.748C133.824 49.916 133.74 50 133.572 50ZM149.669 50H148.517C148.373 50 148.325 49.916 148.373 49.748L150.269 42.536C150.325 42.368 150.445 42.284 150.629 42.284H152.225C152.425 42.284 152.545 42.368 152.585 42.536L154.481 49.748C154.529 49.916 154.481 50 154.337 50H153.185C153.097 50 153.037 49.984 153.005 49.952C152.973 49.912 152.949 49.844 152.933 49.748L152.597 48.428H150.257L149.921 49.748C149.905 49.844 149.877 49.912 149.837 49.952C149.805 49.984 149.749 50 149.669 50ZM151.409 43.736L150.545 47.204H152.321L151.457 43.736H151.409ZM172.104 50H168.156C167.988 50 167.904 49.916 167.904 49.748V42.536C167.904 42.368 167.988 42.284 168.156 42.284H169.176C169.344 42.284 169.428 42.368 169.428 42.536V48.536C169.428 48.624 169.476 48.668 169.572 48.668H172.104C172.264 48.668 172.344 48.756 172.344 48.932V49.748C172.344 49.916 172.264 50 172.104 50ZM185.463 48.032V47.792C185.463 47.624 185.547 47.54 185.715 47.54H186.735C186.903 47.54 186.987 47.624 186.987 47.792V47.888C186.987 48.192 187.047 48.4 187.167 48.512C187.287 48.624 187.507 48.68 187.827 48.68H188.391C188.703 48.68 188.919 48.62 189.039 48.5C189.167 48.38 189.231 48.156 189.231 47.828V47.684C189.231 47.452 189.135 47.276 188.943 47.156C188.759 47.028 188.527 46.952 188.247 46.928C187.967 46.904 187.663 46.86 187.335 46.796C187.015 46.724 186.715 46.636 186.435 46.532C186.155 46.42 185.919 46.208 185.727 45.896C185.543 45.576 185.451 45.168 185.451 44.672V44.252C185.451 43.628 185.627 43.144 185.979 42.8C186.331 42.456 186.819 42.284 187.443 42.284H188.643C189.275 42.284 189.767 42.456 190.119 42.8C190.471 43.144 190.647 43.628 190.647 44.252V44.48C190.647 44.648 190.563 44.732 190.395 44.732H189.375C189.207 44.732 189.123 44.648 189.123 44.48V44.408C189.123 44.096 189.063 43.884 188.943 43.772C188.823 43.66 188.603 43.604 188.283 43.604H187.815C187.487 43.604 187.263 43.668 187.143 43.796C187.031 43.916 186.975 44.156 186.975 44.516V44.744C186.975 45.12 187.303 45.336 187.959 45.392C188.639 45.448 189.243 45.584 189.771 45.8C190.051 45.92 190.283 46.136 190.467 46.448C190.659 46.752 190.755 47.144 190.755 47.624V48.032C190.755 48.656 190.579 49.14 190.227 49.484C189.875 49.828 189.387 50 188.763 50H187.455C186.831 50 186.343 49.828 185.991 49.484C185.639 49.14 185.463 48.656 185.463 48.032Z"
      />
    </motion.svg>
  );
};

export default Logo;