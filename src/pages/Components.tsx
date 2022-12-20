import { Button } from "@mui/material";

import Timeline from "@/components/Timeline";
import { mockParcelsRemaining } from "@/utils/mocks";
import FeatureMark from "@/components/FeatureMark";
import ToggleButtonParcel from "@/components/ToggleButtonParcel";

export default function Components() {
  return (
    <div style={{ padding: "2rem", display: "flex", flexDirection: "column" }}>
      <div>
        <Button>hOPE</Button>
      </div>
      <br />
      <Timeline items={mockParcelsRemaining} />
      <br />
      <FeatureMark />
      <br />
      <br />
      <div>
        <ToggleButtonParcel parcels={[]} />
      </div>
      <br />
      <br />
    </div>
  );
}
