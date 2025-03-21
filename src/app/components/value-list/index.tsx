type Props = {
  title: string;
  arr: object;
};

const ValueList = ({ title, arr }: Props) => {
  return (
    <div>
      <h1 className="text-zinc-500 font-semibold text-xl mb-2">{title}</h1>
      <div className="lg:grid grid-cols-3">
        {Object.entries(arr).map((item, key) => (
          <div key={key} className="bg-zinc-700 p-5 text-center border-zinc-500 border lg:p-10 ">
            <h2 className="text-xl font-semibold mb-2">{item[0]}</h2>
            <h1 className="text-4xl font-bold">{item[1]}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ValueList;
