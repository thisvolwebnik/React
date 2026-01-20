import { Button } from "../button/Button";
import { getPagesArray } from "../../../utils/pages";

export const Pagination = (props) => {
  const { totalPage, page, changePage } = props;

  const pagesArray = getPagesArray(totalPage);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: 10,
        margin: "30px 0",
      }}
    >
      {pagesArray.map((pagination, index) => (
        <Button
          paginationActive={pagination === page}
          key={index}
          onClick={() => changePage(pagination)}
        >
          {pagination}
        </Button>
      ))}
    </div>
  );
};
