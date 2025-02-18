import { useMemo } from "react";
import { useColorMode } from "@chakra-ui/react";

export const JumpBigIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { colorMode } = useColorMode();

  const colors = useMemo(() => {
    return {
      primary: colorMode === "light" ? "#761BA0" : "#FFFFFF",
      secondary: colorMode === "light" ? "#D63A2F" : "#FFFFFF",
    };
  }, [colorMode]);

  return (
    <svg
      width="213"
      height="199"
      viewBox="0 0 213 199"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M116.27 3.7007C116.507 1.85494 118.185 0.554518 120.038 0.790958C132.958 2.44986 145.322 6.44646 156.782 12.6702C158.418 13.5587 159.02 15.6028 158.135 17.235C157.556 18.3028 156.484 18.932 155.355 18.9892C154.753 19.0198 154.139 18.8939 153.571 18.585C142.843 12.7579 131.273 9.0168 119.18 7.46468C117.338 7.22824 116.034 5.54265 116.27 3.69689V3.7007ZM70.2367 13.3566C70.5799 13.3376 70.9231 13.2689 71.2587 13.1393C80.8193 9.48968 90.8985 7.36171 101.218 6.80875C103.075 6.7096 104.498 5.12316 104.399 3.26596C104.299 1.40875 102.713 -0.013702 100.856 0.0854505C89.8384 0.676552 79.0727 2.94943 68.8562 6.8507C67.121 7.51044 66.2477 9.45917 66.9112 11.1943C67.4451 12.5939 68.8142 13.4329 70.2367 13.3566ZM165.248 24.21C170.571 27.6041 175.586 31.5168 180.147 35.8452C181.497 37.1265 183.625 37.0693 184.907 35.7193C186.188 34.3731 186.135 32.2375 184.781 30.96C179.907 26.338 174.553 22.1545 168.863 18.5316C167.296 17.5325 165.213 17.9939 164.214 19.5613C163.596 20.5337 163.539 21.7045 163.959 22.696C164.214 23.2986 164.653 23.8325 165.244 24.21H165.248ZM110.279 22.6579C128.561 23.4702 146.329 30.4833 160.301 42.4121C160.984 42.9956 161.835 43.2587 162.666 43.2129C163.554 43.1672 164.424 42.7668 165.046 42.0346C166.254 40.6197 166.087 38.4956 164.672 37.2905C149.563 24.3931 130.35 16.8079 110.576 15.927C108.7 15.8316 107.144 17.2846 107.064 19.1418C106.98 20.999 108.422 22.574 110.279 22.6541V22.6579ZM60.6189 35.8871C61.1757 35.8566 61.7324 35.6888 62.2358 35.3723C71.8345 29.3011 82.3943 25.3312 93.629 23.5808C95.4672 23.2948 96.7256 21.5748 96.4358 19.7367C96.1498 17.8986 94.3956 16.663 92.5918 16.9299C80.4417 18.8253 69.0163 23.1193 58.6396 29.6863C57.0684 30.6816 56.5994 32.76 57.5947 34.3312C58.2697 35.3952 59.4443 35.9558 60.6227 35.8909L60.6189 35.8871ZM176.387 111.132C176.486 111.132 176.585 111.132 176.681 111.132C178.404 111.041 179.804 109.637 179.861 107.879C179.93 105.797 179.907 103.669 179.793 101.549C179.263 91.6527 176.81 82.1532 172.501 73.321C171.689 71.6544 169.679 70.9604 167.997 71.7727C166.327 72.5888 165.633 74.6023 166.449 76.2765C170.362 84.2964 172.589 92.9226 173.069 101.911C173.172 103.837 173.195 105.771 173.134 107.662C173.073 109.523 174.53 111.079 176.387 111.136V111.132ZM99.3951 35.7269C99.4943 37.5841 101.081 39.0066 102.938 38.9074C106.24 38.732 109.577 38.7969 112.853 39.1019C113.021 39.121 113.189 39.121 113.353 39.1134C114.993 39.0257 116.362 37.7481 116.518 36.0663C116.693 34.2168 115.332 32.5731 113.482 32.4015C109.879 32.0621 106.21 31.9897 102.579 32.1841C100.722 32.2833 99.2998 33.8697 99.3989 35.7269H99.3951ZM90.6278 33.8049C82.6765 35.5591 75.118 38.61 68.1735 42.8697C66.5871 43.8422 66.0913 45.9129 67.0638 47.4994C67.735 48.5901 68.9248 49.1659 70.1184 49.1011C70.66 49.0706 71.2015 48.9104 71.6973 48.6091C78.0049 44.7422 84.8617 41.9735 92.0807 40.3833C93.896 39.9829 95.0439 38.1867 94.6434 36.3714C94.243 34.5562 92.4583 33.4274 90.6316 33.8087L90.6278 33.8049ZM114.539 210.666C60.2566 214.796 11.054 176.287 2.36675 122.546C-3.3841 86.9811 9.02904 51.721 35.1367 27.7261C36.5057 26.4714 38.6337 26.5592 39.8922 27.9282C41.1506 29.2973 41.0591 31.4252 39.6901 32.6837C25.21 45.993 15.2337 63.0053 10.6231 81.5849C11.6451 80.9519 12.835 80.7002 14.0477 80.9328C16.557 81.4019 17.8879 83.5299 19.0168 86.0964C23.4214 66.3002 34.4731 48.2659 50.6807 35.3418C52.1375 34.1824 54.254 34.4227 55.4134 35.8757C56.5727 37.3286 56.3324 39.449 54.8795 40.6045C38.3553 53.7803 27.624 72.6994 24.5388 93.2125C25.7134 93.7044 27.1816 94.0629 29.0617 94.1659C30.6062 94.2307 32.307 93.8379 34.1184 93.1133C36.9824 76.0095 45.8261 60.4807 59.5663 49.0324C60.9926 47.8426 63.1168 48.0333 64.3066 49.4672C65.4964 50.8935 65.3019 53.0176 63.8756 54.2074C52.8926 63.3561 45.3684 75.3765 41.9401 88.7087C43.618 87.5722 45.3379 86.329 47.0731 85.0477C51.9087 81.4743 57.9074 75.7769 62.7316 71.1968C65.0464 68.9964 67.2354 66.918 68.9934 65.3583C72.7345 62.0405 84.1218 51.9536 100.539 56.5108C115.793 60.7477 121.605 69.6218 126.254 78.3472C126.3 78.4311 126.342 78.5188 126.38 78.6066C126.685 79.2892 127.074 80.0748 127.387 80.6277C128.809 81.0663 131.662 81.7413 133.519 82.1303C130.613 79.8536 128.664 76.5205 127.894 75.0523C127.055 73.4506 125.503 70.4761 127.589 67.9744C129.591 65.5756 132.485 66.4833 133.725 66.8684C133.866 66.9142 134.034 66.9561 134.224 67.0019L134.369 67.04C136.871 67.6807 142.065 69.004 146.466 74.6786C147.778 75.7273 154.177 79.2854 157.289 81.0091C165.358 85.4938 166.422 86.1193 167.246 87.5455C167.73 88.3769 169.183 90.8938 165.438 95.8438C164.561 98.0061 162.246 100.332 158.555 99.9739C157.968 99.9167 157.3 99.7947 156.454 99.6383C154.104 99.2112 148.613 98.212 146.618 99.7337C145.951 100.245 143.629 102.243 141.581 104.005C139.552 105.751 137.481 107.532 136.146 108.631C132.535 111.605 130.068 112.215 125.979 113.222C123.218 113.905 122.791 114.431 120.743 116.963C119.241 118.824 117.715 121.215 116.709 122.798C116.213 123.576 115.824 124.179 115.584 124.507C114.146 126.497 112.075 128.404 107.529 127.496C107.198 127.428 106.809 127.351 106.389 127.248C107.03 131.577 108.143 133.457 110.195 135.695C112.598 138.319 117.082 141.202 119.115 142.034C119.508 142.194 119.946 142.362 120.415 142.533C123.157 143.567 126.838 144.951 129.213 147.708C131.086 149.886 132.024 151.255 132.535 152.59C133.595 153.39 135.548 155.057 136.074 158.215L136.135 158.478C136.73 160.987 135.388 162.707 134.057 163.416C133.774 163.565 133.019 163.912 132.043 163.912C131.28 163.912 130.178 163.695 129.118 162.715C127.947 163.111 126.7 163.031 125.404 162.478C123.363 163.306 121.178 162.657 118.909 160.56L118.268 159.965C116.083 157.925 112.785 154.851 107.632 151.194C104.383 148.883 101.58 147.449 99.3265 146.293C97.5265 145.37 96.1079 144.646 94.8913 143.727C91.2418 140.966 91.1388 138.804 91.2646 134.91L91.3028 133.529C91.4134 129.575 91.5507 124.655 90.5057 117.581C89.7201 112.265 84.2362 108.49 78.9354 104.836C76.9867 103.494 75.1562 102.232 73.543 100.885C70.7057 98.5171 68.9744 96.9536 67.8303 95.9201C67.4184 95.5464 67.0714 95.2337 66.7968 94.9934C66.5451 95.1345 66.2744 95.287 66.0151 95.4358C65.5269 95.7142 64.8824 96.1298 64.0701 96.6599C60.7523 98.8108 55.2227 102.399 46.7299 105.904C44.3655 106.88 42.0964 107.654 39.9189 108.246C39.9265 108.429 39.9189 108.612 39.9303 108.795C41.6197 142.468 67.4604 169.289 101.073 171.92C131.517 174.304 158.974 156.22 169.164 128.282C169.74 126.699 171.33 125.609 172.989 125.918C175.098 126.31 176.261 128.454 175.567 130.379C166.27 156.113 143.671 174.251 116.957 178.068C114.531 178.415 112.773 180.554 112.903 182.999V183.014C113.051 185.806 115.572 187.869 118.341 187.472C160.313 181.451 191.588 144.162 189.277 101.026C188.758 91.3667 186.604 81.9892 182.866 73.157C182.073 71.2769 183.114 69.0803 185.185 68.5693C186.806 68.1689 188.48 69.1375 189.128 70.6782C193.373 80.7612 195.714 91.4964 196.08 102.548C197.625 149.211 162.227 189.814 115.786 194.6C87.4167 197.521 61.0384 186.927 42.6646 168.267C40.9943 166.57 38.2905 166.479 36.479 168.027H36.4752C34.454 169.762 34.332 172.847 36.1968 174.742C55.3714 194.18 82.44 205.663 111.785 204.092C166.178 201.178 208.059 154.561 205.145 100.168C204.283 84.0904 199.478 68.3481 191.245 54.6422C190.192 52.8879 190.921 50.5655 192.9 49.7723C194.452 49.1507 196.244 49.8829 197.106 51.3206C205.851 65.9303 210.957 82.6947 211.872 99.8061C214.942 157.105 171.471 206.326 114.543 210.659L114.539 210.666ZM33.2184 109.489C29.7862 109.794 26.6134 109.519 23.6884 108.669C23.7036 109.077 23.7151 109.485 23.7341 109.897C25.9956 152.162 59.7151 185.417 100.936 188.162C103.777 188.353 106.149 186 105.996 183.159C105.871 180.776 103.99 178.853 101.607 178.697C65.1189 176.287 35.2625 146.888 33.2146 109.493L33.2184 109.489ZM11.6833 89.1053C11.5727 91.8663 13.3956 96.8849 18.029 101.08C25.2023 106.983 34.4731 106.323 44.9032 102.018C55.3333 97.7125 61.2367 93.1896 63.6659 91.8091C66.0951 90.4286 66.5909 90.154 67.8608 90.7604C69.1307 91.3667 70.0117 92.6366 76.0295 97.6591C82.0434 102.682 93.0684 107.544 94.4604 116.975C95.6045 124.72 95.3985 130.109 95.2879 134.136C95.1773 138.163 94.9562 138.662 97.2176 140.371C99.479 142.083 103.949 143.57 109.856 147.765C115.759 151.96 119.29 155.381 121.556 157.479C123.817 159.576 124.038 158.253 124.038 157.589C124.038 156.926 124.149 156.762 125.857 158.031C127.57 159.301 128.008 158.695 128.065 157.757C128.119 156.819 128.34 156.872 130.216 158.253C132.093 159.633 131.982 160.35 131.707 158.97C131.265 156.155 128.729 155.713 128.561 154.775C128.397 153.837 127.844 152.845 125.8 150.469C123.76 148.097 119.729 146.938 117.304 145.943C114.874 144.951 109.852 141.805 106.874 138.548C103.895 135.291 102.347 132.313 101.687 125.14C101.024 117.966 100.879 112.723 100.638 110.293C100.154 105.408 104.395 100.744 106.397 99.7451C110.874 97.5065 113.856 101.373 112.945 106.541C112.373 109.79 110.184 117.082 110.02 117.467C109.856 117.852 108.365 119.839 108.365 119.839C108.365 119.839 107.095 119.728 106.931 119.507C106.767 119.286 106.546 117.078 105.939 117.078C105.333 117.078 105.276 119.175 105.112 120.884C104.948 122.596 105.665 122.87 108.147 123.366C110.63 123.862 111.236 123.034 111.953 122.043C112.67 121.051 114.932 117.188 117.25 114.317C119.569 111.445 120.728 110.122 124.755 109.13C128.782 108.139 130.438 107.696 133.252 105.378C136.066 103.059 142.416 97.476 143.846 96.3815C148.083 93.1476 156.484 95.554 158.746 95.7752C161.007 95.9964 161.446 93.8226 161.446 93.8226C161.446 93.8226 163.985 90.6993 163.379 89.6506C162.773 88.6019 144.506 79.3311 143.072 77.4549C138.988 72.0472 134.022 71.4409 132.257 70.8879C130.491 70.335 129.885 70.171 131.414 73.096C132.943 76.021 135.567 79.2777 138.16 80.0481C140.753 80.8222 140.643 81.3714 140.368 81.9243C140.093 82.4773 134.96 86.6722 134.076 86.5616C133.191 86.451 125.19 84.7388 124.42 84.0218C123.646 83.3049 122.322 80.3227 122.322 80.3227C117.357 70.9947 112.113 64.1532 99.2006 60.5646C86.2879 56.9761 76.9333 63.7604 71.579 68.5044C66.2248 73.2523 56.7634 82.9693 49.3689 88.4303C41.9744 93.8951 35.0756 98.7154 28.6193 98.3646C19.1426 97.8498 16.6447 91.9616 15.76 89.7574C14.8752 87.5493 13.9371 85.2307 13.0562 85.0667C12.1714 84.9027 11.7862 86.3366 11.6756 89.0938L11.6833 89.1053ZM105.264 112.944C105.546 112.894 105.844 112.871 106.149 112.871C106.511 112.871 106.858 112.909 107.186 112.982C107.93 110.396 108.723 107.418 109.005 105.812C109.23 104.527 109.021 103.711 108.864 103.36C108.765 103.391 108.639 103.444 108.49 103.517C107.655 103.932 104.761 107.071 105.039 109.882C105.119 110.675 105.184 111.697 105.257 112.944H105.264ZM32.9706 156.636C23.7265 143.403 17.9375 127.527 17.0108 110.255C16.9231 108.615 16.885 106.976 16.8888 105.343C16.4388 105.023 15.9964 104.691 15.5617 104.333L15.4206 104.211C11.7443 100.885 9.48667 97.0298 8.41887 93.6472C7.74768 99.2684 7.54938 104.981 7.85827 110.74C8.8765 129.75 15.2451 147.22 25.4083 161.792C26.9566 164.015 30.0913 164.419 32.1507 162.657C33.9125 161.147 34.2939 158.539 32.9668 156.636H32.9706Z"
        fill="white"
      />

      <defs>
        <linearGradient
          id="paint0_linear_353_1859"
          x1="1.86218"
          y1="30.0067"
          x2="58.1402"
          y2="30.0067"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={colors.primary} />
          <stop offset="1" stopColor={colors.secondary} />
        </linearGradient>
      </defs>
    </svg>
  );
};
