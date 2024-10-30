import clsx from "clsx";

type TButtonProps = {
  primary?: boolean;
  loading?: boolean;
} & React.ComponentPropsWithoutRef<"button">;

export function Button(props: TButtonProps) {
  const {
    type = "button",
    className,
    children,
    primary,
    loading,
    ...otherProps
  } = props;

  return (
    <button
      type={type}
      className={clsx(
        "cursor-pointer duration-300 disabled:cursor-not-allowed hover:scale-105 active:scale-95 ease-in-out",
        className,
        primary
          ? "flex w-full items-center justify-center rounded-full bg-button-action py-[16px] text-center text-[16px] text-white disabled:cursor-not-allowed disabled:opacity-80"
          : ""
      )}
      {...otherProps}
    >
      {loading && (
        <span className="mr-2 inline-block aspect-square w-6 tablet:mr-[8px] tablet:w-[20px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 0 20 20"
            width="20"
            className="h-full w-full animate-spin"
          >
            <path
              d="m10 3.5c-3.58985 0-6.5 2.91015-6.5 6.5 0 .4142-.33579.75-.75.75s-.75-.3358-.75-.75c0-4.41828 3.58172-8 8-8 4.4183 0 8 3.58172 8 8 0 4.4183-3.5817 8-8 8-.41421 0-.75-.3358-.75-.75s.33579-.75.75-.75c3.5899 0 6.5-2.9101 6.5-6.5 0-3.58985-2.9101-6.5-6.5-6.5z"
              fill="#fff"
            />
          </svg>
        </span>
      )}
      {children}
    </button>
  );
}
