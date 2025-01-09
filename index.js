const filesizeConverter = {
     // Bytes to other units
     bytesToKilobytes: (bytes) => bytes / 1024,
     bytesToMegabytes: (bytes) => bytes / (1024 * 1024),
     bytesToGigabytes: (bytes) => bytes / (1024 * 1024 * 1024),
 
     // Kilobytes to other units
     kilobytesToBytes: (kilobytes) => kilobytes * 1024,
     kilobytesToMegabytes: (kilobytes) => kilobytes / 1024,
     kilobytesToGigabytes: (kilobytes) => kilobytes / (1024 * 1024),
 
     // Megabytes to other units
     megabytesToBytes: (megabytes) => megabytes * (1024 * 1024),
     megabytesToKilobytes: (megabytes) => megabytes * 1024,
     megabytesToGigabytes: (megabytes) => megabytes / 1024,
 
     // Gigabytes to other units
     gigabytesToBytes: (gigabytes) => gigabytes * (1024 * 1024 * 1024),
     gigabytesToKilobytes: (gigabytes) => gigabytes * (1024 * 1024),
     gigabytesToMegabytes: (gigabytes) => gigabytes * 1024,
};

module.exports = filesizeConverter;
