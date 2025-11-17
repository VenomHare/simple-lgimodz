import { BadgeAlert } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface Props {
  text: string;
}

const NoticeCard = ({ text }: Props) => {
  return (
    <>
      <Card className="bg-amber-600/20 border border-amber-500/40 text-amber-300 
              px-4 py-3 rounded-xl 
              shadow-[0_0_15px_rgba(255,193,7,0.25)]
              backdrop-blur-sm w-fit md:min-w-2xl lg:min-w-3xl mx-auto">
        <CardHeader >
          <CardTitle className="flex items-center justify-center gap-2">
            <BadgeAlert />
            Notice
          </CardTitle>
        </CardHeader>
        <CardContent className="w-full text-balance text-center text-xl">{text}</CardContent>
      </Card>
    </>
  );
};

export default NoticeCard;
