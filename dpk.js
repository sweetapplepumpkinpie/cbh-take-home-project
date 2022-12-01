const crypto = require("crypto");

const getHashedData = (data) =>
  crypto.createHash("sha3-512").update(data).digest("hex");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  if (!event) {
    return TRIVIAL_PARTITION_KEY;
  }

  const candidate = !event.partitionKey
    ? getHashedData(JSON.stringify(event))
    : typeof event.partitionKey === "string"
    ? event.partitionKey
    : JSON.stringify(event.partitionKey);

  return candidate.length > MAX_PARTITION_KEY_LENGTH
    ? getHashedData(candidate)
    : candidate;
};
