import { FC } from "react";

interface Props {
  params: {
    key: string;
  };
}

const CatalogCategory: FC<Props> = ({ params }) => {
  return <div>some category {params.key} </div>;
};

export default CatalogCategory;
