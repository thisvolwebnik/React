import { Input } from "./UI/input/Input";
import { Select } from "./UI/select/Select";

export const PostFilter = (props) => {
  const { filter, setFilter } = props;

  return (
    <div>
      <Input
        placeholder="Поиск"
        value={filter.query}
        onChange={(event) =>
          setFilter({ ...filter, query: event.target.value })
        }
      />
      <Select
        value={filter.sort}
        defaultValue="Сортировка"
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        options={[
          { value: "title", name: "По названию" },
          { value: "description", name: "По описанию" },
        ]}
      />
    </div>
  );
};
