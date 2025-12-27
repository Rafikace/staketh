import { JSX } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";


export default function GapCard({ key, header, icon, description }: {key: number, header: string, description: string, icon: JSX.Element}) {
    return (
        <Card key={key} className="flex flex-col gap-2 justify-start p-3 w-full max-w-[300px] items-start">
            <CardTitle>{icon}</CardTitle>
            <CardHeader className="text-nowrap text-center font-[600] text-lg w-full">{header}</CardHeader>
            <CardContent>{description}</CardContent>
        </Card>
    )
}