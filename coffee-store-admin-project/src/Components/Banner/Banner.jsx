import { Link } from 'react-router-dom';
const Banner = () => {
  return (
    <div className=" max-w-7xl flex items-center container mx-auto mb-10  bg-[url(https://s3-alpha-sig.figma.com/img/2de6/70fc/cc0b630a2dc4ad10a7be1ee3b1dd00d9?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bVV4Y5Vcnyw0fElkXdmFdYRbfwPU8TgGBxUGF7tp6n5xMEj-Cx45OIU2j8dR~6gheU933JYILiyTLnl7SQcU5Q9VgX7MQu7Un57W4Ffff5UifVX0pCKRcE-u~2Xn3Yi1fTQllSeijvJUkE8jFYVRu7e6PswAkR8mrCkW56CdltOi~SFNVSHDohVIqeSDPAh8EysEujDoW8zYDoOCXk9o6OPCCRxwIqD41tBfCUzVui2LR9PRF0ETX8eEo2MpMXlRuguSs-2SoEC5~Jtn86dUukhDRmD9SZuD2ETzv6VoSTzWsnpXP4snoYTRveo945-xal~EJ8-7GSEHajlgwU4HDg__)]">
      <div className="flex justify-center w-full items-center container mx-auto h-20">
        <div className="flex items-center gap-5">
          <img
            src="https://s3-alpha-sig.figma.com/img/6fa6/0717/e0179338c5e93a78b31ecec8e2cb6ef2?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U~tYgai2eobJejELdE4b26BaQIK1v07hR7oZ213Y~RZbRv7w5UipBgWZhrERR22W8lTvOwX1PDAU42tnumHqG41aIYbIEDpfn6w1Wl4NUwpr9I0KsNeUp~127Rgu78t~glnjGtyAXOfSaGBAFkXJ4tffTjHsh5QJEGFJB7RM9PTGfMmK2xB6XGYtUJXTcLQowACxXi2RfuSoh2d~j1PwMVuvOkYjEaKyPzZ0uTkOpncbFcPN8g~oz8oqRgPy5c2pOcFHtoz-swllDK31IPUxjqaIMiRjuXSrMLbRU7gjBXW64m~Yj3w~d0UoNNOYhenJFCs~1kxOzgwM6JbsqempoA__"
            alt=""
            className="w-16 h-16"
          />
          <h2 className="text-white text-2xl font-bold">Espresso Emporium</h2>
        </div>
        <div className="flex w-[50%] justify-end items-center gap-5">
          {' '}
          <Link to={'/'}>
            <button className="btn w-32 bg-[#E3B577] text-xl  flex items-center">
              Home
            </button>
          </Link>
          <Link to={'/login'}>
            <button className="btn text-xl w-32 bg-[#E3B577]">Login</button>
          </Link>
          <Link to={'/register'}>
            <button className="btn text-xl w-32 bg-[#E3B577]">Register</button>
          </Link>
          <Link to={'/users'}>
            <button className="btn text-xl w-32 bg-[#E3B577]">Users</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
