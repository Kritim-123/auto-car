export default function Home() {
  return (
    <div>
      <div>
        {/* TODO : Add crousel (box) to show the papers in different box and when I click on them 
         make them pop-up and show description. */}

        <h2 className="text-2x1 font-bold my-4">References Paper</h2>
        <ul>
          <li>
            A Bird's Eye View Object Detection Network for LiDAR Point Cloud.
          </li>
          <p>
            The paper talks about: A novel single-stage BEV-based LiDAR object
            detection network (BEV-Net). Efficient use of ResNet backbones for
            flexible trade-offs between speed and accuracy. Extensive evaluation
            on KITTI, nuScenes, and Waymo datasets. Outperforms existing
            BEV-based methods while maintaining real-time inference speed.
          </p>
        </ul>
      </div>
    </div>
  );
}
