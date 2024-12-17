import { Calendar } from "@/components/ui/calendar";

interface BirthDateCalendarProps {
  selectedDate: Date | undefined;
  handleDateSelect: (date: Date | undefined) => void;
  month: number;
  year: number;
  setMonth: (month: number) => void;
  setYear: (year: number) => void;
}

const BirthDateCalendar = ({
  selectedDate,
  handleDateSelect,
  month,
  year,
  setMonth,
  setYear,
}: BirthDateCalendarProps) => {
  return (
    <div className="flex justify-center">
      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={handleDateSelect}
        disabled={(date) => date > new Date()}
        defaultMonth={new Date(year, month)}
        month={new Date(year, month)}
        onMonthChange={(date) => {
          setMonth(date.getMonth());
          setYear(date.getFullYear());
        }}
        className="rounded-md border border-gold/20 bg-rich-black text-gold w-full max-w-[350px]"
      />
    </div>
  );
};

export default BirthDateCalendar;