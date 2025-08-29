import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@packages/react/components/avatar";

export function AvatarDemo() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex flex-wrap items-center gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <Avatar>
          <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
          <AvatarFallback>VR</AvatarFallback>
        </Avatar>

        <Avatar>
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>

        <Avatar className="size-12">
          <AvatarImage src="https://github.com/radix-ui.png" alt="@radix" />
          <AvatarFallback>RU</AvatarFallback>
        </Avatar>

        <Avatar className="size-16">
          <AvatarImage src="https://github.com/ark-ui.png" alt="@ark-ui" />
          <AvatarFallback>AU</AvatarFallback>
        </Avatar>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Avatar className="size-6">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <Avatar className="size-8">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <Avatar className="size-10">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <Avatar className="size-12">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
