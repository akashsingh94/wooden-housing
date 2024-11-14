import Hero from "@/components/hero/Hero";
import ProjectFeatures from "@/components/home-project/ProjectFeatures";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import Image from "next/image";
import ArrowRight from "../../public/icons/arrow-right-primary.svg";
import ProjectImageSlider from "@/components/home-project/ProjectImageSlider";
import ProjectDetails from "@/components/home-project/ProjectDetails";

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
      <div className="tw--flex tw--justify-center tw--mt-1 tw--px-4">
        <div className="container tw--flex tw--flex-col tw--gap-8">
          <Breadcrumbs
            separator={<Image src={ArrowRight} alt="" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
          <ProjectFeatures />
          <div className="tw--pt-6 tw--flex tw--gap-8 tw--flex-col tw--justify-center xl:tw--flex-row">
            <ProjectImageSlider className="tw--flex-1 xl:tw--max-w-[762px] xl:tw--max-h-[500px]" />
            <ProjectDetails className="tw--flex-1 xl:tw--max-w-[435px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
