import ProjectFeatures from "@/components/home-project/ProjectFeatures";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import classNames from "classnames";
import Image from "next/image";

import Hero from "@/components/hero/Hero";
import ProjectImageSlider from "@/components/home-project/ProjectImageSlider";
import ProjectDetails from "@/components/home-project/ProjectDetails";
import ArrowRight from "../../public/icons/arrow-right-primary.svg";
import ProjectFloorPlan from "@/components/home-project/ProjectFloorPlan";
import { firestore } from "../../firebase";
import { Service } from "@/typings/services";

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

async function getProjectData() {
  const querySnapshot = await firestore.collection("services").get();
  const items: Service[] = [];

  querySnapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() } as Service);
  });
  return items;
}

export default async function Home() {
  const data = await getProjectData();
  const currentProject = data.at(0);

  return (
    <div>
      <Hero
        title={currentProject?.title ?? ""}
        descriptions={currentProject?.description ?? ""}
        src={currentProject?.gallery.at(0) ?? ""}
      />
      {currentProject ? (
        <div className="tw--flex tw--justify-center tw--mt-1 tw--px-4">
          <div className="container tw--flex tw--flex-col tw--gap-8">
            <Breadcrumbs
              separator={<Image src={ArrowRight} alt="" />}
              aria-label="breadcrumb"
            >
              {breadcrumbs}
            </Breadcrumbs>
            <ProjectFeatures
              noOfYearWarranty={currentProject.projectDetails.warrantyYears}
            />
            <div
              className={classNames(
                "tw--pt-6 tw--flex  tw--gap-20 tw--flex-col tw--justify-center",
                "lg:tw--gap-8 lg:tw--flex-row"
              )}
            >
              <ProjectImageSlider
                gallery={currentProject.gallery}
                className="tw--flex-1 xl:tw--max-w-[762px] xl:tw--max-h-[500px]"
              />
              <ProjectDetails
                details={currentProject.projectDetails}
                className="tw--flex-1 xl:tw--max-w-[435px]"
              />
            </div>
            <ProjectFloorPlan className="tw--pt-6" />
          </div>
        </div>
      ) : (
        <Typography className="tw--py-5 tw--flex tw--items-center tw--justify-center">
          No details found
        </Typography>
      )}
    </div>
  );
}
