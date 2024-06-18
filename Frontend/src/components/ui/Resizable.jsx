// import { DragHandleDots2Icon } from "@radix-ui/react-icons";
// import * as ResizablePrimitive from "react-resizable-panels";

// import { cn } from "../../lib/utils"; // Adjust the path to utils accordingly

// const ResizablePanelGroup = ({ className, ...props }) => (
//   <ResizablePrimitive.PanelGroup
//     className={cn(
//       "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
//       className
//     )}
//     {...props}
//   />
// );

// const ResizablePanel = ResizablePrimitive.Panel;

// const ResizableHandle = ({ withHandle, className, ...props }) => (
//   <ResizablePrimitive.PanelResizeHandle
//     className={cn(
//       "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
//       className
//     )}
//     {...props}
//   >
//     {withHandle && (
//       <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
//         <DragHandleDots2Icon className="h-2.5 w-2.5" />
//       </div>
//     )}
//   </ResizablePrimitive.PanelResizeHandle>
// );

// export default{ ResizablePanelGroup, ResizablePanel, ResizableHandle };


import { DragHandleDots2Icon } from "@radix-ui/react-icons";
import * as ResizablePrimitive from "react-resizable-panels";
import { cn } from "../../lib/utils";
import { color } from "@uiw/react-codemirror";

// import { cn } from "@/lib/uti";

const ResizablePanelGroup = ({ className, ...props }) => (
  <ResizablePrimitive.PanelGroup
    className={cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col text-black",
      className
    )}
    {...props}
  />
);

const ResizablePanel = ResizablePrimitive.Panel;

const ResizableHandle = ({ withHandle, className, ...props }) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      "relative text-black flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border" style={{color:"black"}}> 
        <DragHandleDots2Icon className="h-2.5 w-2.5 text-black"  />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
);

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
