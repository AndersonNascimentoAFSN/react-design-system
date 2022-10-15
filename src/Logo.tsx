import { SVGAttributes } from "react";

interface LogoProps extends SVGAttributes<HTMLOrSVGElement> {}

export function Logo(props: LogoProps) {
  return (
    <svg
      width={97}
      height={120}
      viewBox="0 0 97 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1_72)" fill="#81D8F7">
        <path d="M96.401 60.01c0-6.976-7.997-13.587-20.259-17.687 2.83-13.653 1.572-24.514-3.969-27.992-1.277-.816-2.77-1.202-4.401-1.202v4.787c.903 0 1.63.193 2.24.558 2.672 1.674 3.831 8.05 2.927 16.25-.216 2.018-.57 4.143-1.002 6.31-3.851-1.03-8.056-1.824-12.477-2.339-2.653-3.971-5.404-7.578-8.174-10.733 6.405-6.504 12.418-10.067 16.505-10.067v-4.787c-5.403 0-12.477 4.207-19.63 11.505-7.152-7.255-14.226-11.42-19.63-11.42v4.787c4.068 0 10.1 3.542 16.506 10.003a99.966 99.966 0 00-8.115 10.712c-4.441.515-8.646 1.31-12.497 2.361a70.225 70.225 0 01-1.022-6.225c-.924-8.2.216-14.575 2.869-16.271.59-.386 1.355-.558 2.26-.558v-4.787c-1.651 0-3.145.386-4.442 1.202-5.521 3.478-6.759 14.318-3.91 27.927C7.958 46.466 0 53.056 0 60.011c0 6.976 7.997 13.588 20.259 17.688-2.83 13.652-1.572 24.514 3.969 27.991 1.277.816 2.77 1.202 4.421 1.202 5.404 0 12.478-4.207 19.63-11.505 7.153 7.255 14.226 11.42 19.63 11.42 1.65 0 3.144-.387 4.441-1.203 5.522-3.477 6.76-14.317 3.91-27.927 12.183-4.1 20.141-10.711 20.141-17.666zM70.817 45.694c-.727 2.769-1.63 5.624-2.652 8.479a104.707 104.707 0 00-2.575-5.152 118.536 118.536 0 00-2.829-5.023c2.79.45 5.482 1.009 8.056 1.696zm-9 22.861c-1.532 2.898-3.104 5.646-4.735 8.2-2.928.28-5.895.43-8.881.43-2.968 0-5.935-.15-8.843-.408a120.312 120.312 0 01-4.755-8.157 115.85 115.85 0 01-4.087-8.544 116.05 116.05 0 014.067-8.565c1.533-2.898 3.105-5.645 4.736-8.2a93.672 93.672 0 018.882-.43c2.967 0 5.934.151 8.842.409a120.256 120.256 0 014.755 8.157 115.85 115.85 0 014.087 8.543 124.651 124.651 0 01-4.067 8.565zm6.348-2.79a97.876 97.876 0 012.711 8.543 81.569 81.569 0 01-8.095 1.717 121.067 121.067 0 002.83-5.087 125.902 125.902 0 002.554-5.173zM48.24 88.668a86.742 86.742 0 01-5.463-6.87c1.769.087 3.576.15 5.404.15 1.847 0 3.674-.042 5.463-.15a82.208 82.208 0 01-5.404 6.87zM33.62 76.024a81.998 81.998 0 01-8.056-1.695c.727-2.77 1.631-5.625 2.653-8.48.806 1.718 1.65 3.435 2.574 5.152a145.017 145.017 0 002.83 5.023zm14.522-44.67a86.697 86.697 0 015.462 6.869 111.32 111.32 0 00-5.403-.15c-1.848 0-3.675.042-5.463.15a82.25 82.25 0 015.404-6.87zM33.6 43.997a121.07 121.07 0 00-2.83 5.088 125.105 125.105 0 00-2.554 5.151 97.887 97.887 0 01-2.712-8.543 88.291 88.291 0 018.096-1.696zM15.818 70.873C8.862 67.63 4.362 63.38 4.362 60.01s4.5-7.642 11.456-10.862c1.69-.794 3.537-1.503 5.443-2.168 1.12 4.207 2.594 8.586 4.421 13.073-1.808 4.465-3.262 8.822-4.362 13.008a56.516 56.516 0 01-5.502-2.19zm10.572 30.674c-2.673-1.674-3.832-8.05-2.928-16.25.216-2.017.57-4.142 1.002-6.31 3.851 1.03 8.056 1.824 12.477 2.34 2.653 3.97 5.404 7.577 8.175 10.732-6.406 6.505-12.419 10.068-16.506 10.068-.884-.022-1.631-.215-2.22-.58zM72.999 85.19c.923 8.2-.217 14.576-2.87 16.271-.589.387-1.355.559-2.26.559-4.067 0-10.099-3.542-16.505-10.004a99.98 99.98 0 008.116-10.711c4.44-.515 8.645-1.31 12.497-2.361.452 2.168.805 4.25 1.022 6.246zm7.565-14.317c-1.69.794-3.537 1.502-5.443 2.168-1.12-4.208-2.594-8.587-4.422-13.073 1.808-4.465 3.262-8.823 4.363-13.009a58.997 58.997 0 015.521 2.19C87.54 52.39 92.04 56.641 92.04 60.011c-.02 3.37-4.52 7.642-11.475 10.861z" />
        <path d="M48.18 69.82c4.96 0 8.98-4.391 8.98-9.81 0-5.417-4.02-9.81-8.98-9.81-4.959 0-8.979 4.393-8.979 9.81 0 5.419 4.02 9.81 8.98 9.81z" />
      </g>
      <defs>
        <clipPath id="clip0_1_72">
          <path fill="#fff" d="M0 0H96.4012V120H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
