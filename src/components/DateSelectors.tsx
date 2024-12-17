import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface DateSelectorsProps {
  month: number;
  year: number;
  setMonth: (month: number) => void;
  setYear: (year: number) => void;
}

const DateSelectors = ({ month, year, setMonth, setYear }: DateSelectorsProps) => {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

  return (
    <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
      <Select
        value={month.toString()}
        onValueChange={(value) => setMonth(parseInt(value))}
      >
        <SelectTrigger className="w-full sm:w-[140px] bg-rich-black border-gold/20 text-gold">
          <SelectValue placeholder="Month" />
        </SelectTrigger>
        <SelectContent className="bg-rich-black border-gold/20 max-h-[200px] overflow-y-auto">
          {months.map((monthName, index) => (
            <SelectItem
              key={index}
              value={index.toString()}
              className="text-gold hover:bg-gold/20"
            >
              {monthName}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={year.toString()}
        onValueChange={(value) => setYear(parseInt(value))}
      >
        <SelectTrigger className="w-full sm:w-[100px] bg-rich-black border-gold/20 text-gold">
          <SelectValue placeholder="Year" />
        </SelectTrigger>
        <SelectContent className="bg-rich-black border-gold/20 max-h-[200px] overflow-y-auto">
          {years.map((year) => (
            <SelectItem
              key={year}
              value={year.toString()}
              className="text-gold hover:bg-gold/20"
            >
              {year}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default DateSelectors;