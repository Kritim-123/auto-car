import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

export default function Home() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <div>
        <h2 className="text-2x1 font-bold my-4 mx-4">References Papers</h2>
        <Card
          className="w-[350px] mx-4 my-4 h-auto cursor-pointer"
          onClick={() => setExpanded(!expanded)}
        >
          <CardHeader>
            <CardTitle>
              A Bird's Eye View Object Detection Network for LiDAR Point Cloud.
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className={expanded ? "" : "line-clamp-4"}>
              The paper talks about: A novel single-stage BEV-based LiDAR object
              detection network (BEV-Net). Efficient use of ResNet backbones for
              flexible trade-offs between speed and accuracy. Extensive
              evaluation on KITTI, nuScenes, and Waymo datasets. Outperforms
              existing BEV-based methods while maintaining real-time inference
              speed.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
