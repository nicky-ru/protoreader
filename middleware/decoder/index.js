const SensorData = require('../pebbleprotodef');

function decode(records) {
    const telemetries = records.map((record) => {
        const raw = record.raw;
        const encodedTelemetry = raw.replace(/0x/g, '');
        const telemetry = SensorData.decode(Buffer.from(encodedTelemetry, 'hex'));
        return telemetry;
    })
    return telemetries;
}

exports.decodeTelemetry = records => decode(records);