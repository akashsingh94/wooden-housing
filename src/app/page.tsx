import Hero from "@/components/hero/Hero";
import { Breadcrumbs, Link, Typography } from "@mui/material";

export default function Home() {
  const breadcrumbs = [
    <Link
      className="tw--text-[#232323] tw--text-sm"
      underline="hover"
      key="1"
      color="inherit"
      href="/"
    >
      Home
    </Link>,
    <Link
      className="tw--text-[#232323] tw--text-sm"
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
    >
      Wooden Cottages Series
    </Link>,
    <Typography
      key="3"
      className="tw--text-[#232323] tw--text-sm tw--font-semibold"
    >
      1BHK
    </Typography>,
  ];
  return (
    <div>
      <Hero />
      <div className="tw--flex tw--justify-center">
        <div className="container">
          <Breadcrumbs
            classes={{ separator: "tw--text-primary tw--text-2xl" }}
            separator="›"
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </div>
      </div>
    </div>
  );
}
