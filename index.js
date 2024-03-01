const filesizeConverter = {
    bytesToKilobytes: (bytes) => {
        return bytes / 1024;
    },
    bytesToMegabytes: (bytes) => {
        return bytes / (1024 * 1024);
    },
    bytesToGigabytes: (bytes) => {
        return bytes / (1024 * 1024 * 1024);
    },
    kilobytesToBytes: (kilobytes) => {
        return kilobytes * 1024;
    },
    megabytesToBytes: (megabytes) => {
        return megabytes * (1024 * 1024);
    },
    gigabytesToBytes: (gigabytes) => {
        return gigabytes * (1024 * 1024 * 1024);
    },
};

module.exports = filesizeConverter;
