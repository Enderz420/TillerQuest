import { getGuildsAndMemberCount } from "@/data/guilds/getGuilds";
import { RadioGroup, FormControlLabel, Radio } from "@mui/material";
import React, { useEffect, useState } from "react";

interface Guild {
  name: string;
  memberCount: number;
}

function ClassGuilds({
  userId,
  setGuild,
}: {
  userId: string;
  guild: string;
  setGuild: (guild: string) => void;
}) {
  const [guilds, setGuilds] = useState<Guild[]>([]);

  useEffect(() => {
    const fetchGuildNames = async () => {
      const guilds = await getGuildsAndMemberCount(userId);
      setGuilds(guilds.map((guild) => guild));
    };

    fetchGuildNames();
  }, [setGuild, userId]);

  const handleClick = (guildName: string) => {
    setGuild(guildName);
  };

  return (
    <div className="w-2/3">
      <RadioGroup row name="row-radio-buttons-group">
        {guilds.map((guildWithCount) => (
          <FormControlLabel
            value={guildWithCount.name}
            key={guildWithCount.name}
            control={<Radio />}
            disabled={guildWithCount.memberCount > 4}
            label={
              guildWithCount.name +
              " (" +
              guildWithCount.memberCount +
              " members)"
            }
            onClick={() => handleClick(guildWithCount.name)}
          />
        ))}
      </RadioGroup>
    </div>
  );
}

export default ClassGuilds;
