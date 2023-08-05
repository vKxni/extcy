interface FileStat {
    size: number;
    type: 'device' | 'directory' | 'regular' | 'other' | 'symlink';
    access: 'read' | 'write' | 'read_write' | 'none';
    atime: Date | number;
    mtime: Date | number;
    ctime: Date | number;
    mode: number;
    links: number;
    major_device: number;
    minor_device: number;
    inode: number;
    uid: number;
    gid: number;
}

/**
 * This module contains functions to manipulate files.
 *
 * https://hexdocs.pm/elixir/1.13/File.html
 *
 * ```ts
 const elixirFileInfo = {
    size: 1024,
    type: 'regular',
    access: 'read_write',
    atime: 1669820525000,
    mtime: '2023-08-01T12:34:56.789Z',
    ctime: '2023-08-01T12:34:56.789Z',
    mode: 0o755,
    links: 1,
    major_device: 0,
    minor_device: 0,
    inode: 12345,
    uid: 1000,
    gid: 1000,
};

const tsFileStat = FileInfoConverter.fromRecord(elixirFileInfo);
console.log(tsFileStat);

const tsFileInfo = FileInfoConverter.toRecord(tsFileStat);
console.log(tsFileInfo);
{
  size: 1024,
  type: 'regular',
  access: 'read_write',
  atime: 1669820525000,
  mtime: 2023-08-01T12:34:56.789Z,
  ctime: 2023-08-01T12:34:56.789Z,
  mode: 493,
  links: 1,
  major_device: 0,
  minor_device: 0,
  inode: 12345,
  uid: 1000,
  gid: 1000
}
{
  size: 1024,
  type: 'regular',
  access: 'read_write',
  atime: 1669820525000,
  mtime: '2023-08-01T12:34:56.789Z',
  ctime: '2023-08-01T12:34:56.789Z',
  mode: 493,
  links: 1,
  major_device: 0,
  minor_device: 0,
  inode: 12345,
  uid: 1000,
  gid: 1000
}
```
 */
export class FileInfoConverter {
	/**
     * Converts a :file_info record into a File.Stat.
     * @param fileInfo The :file_info record to convert.
     * @returns File.Stat object.
     *
     */
	static fromRecord(fileInfo: {
        size: number;
        type: 'device' | 'directory' | 'regular' | 'other' | 'symlink';
        access: 'read' | 'write' | 'read_write' | 'none';
        atime: Date | number;
        mtime: Date | number;
        ctime: Date | number;
        mode: number;
        links: number;
        major_device: number;
        minor_device: number;
        inode: number;
        uid: number;
        gid: number;
    }): FileStat {
		return {
			size: fileInfo.size,
			type: fileInfo.type,
			access: fileInfo.access,
			atime: FileInfoConverter.parseDateTime(fileInfo.atime),
			mtime: FileInfoConverter.parseDateTime(fileInfo.mtime),
			ctime: FileInfoConverter.parseDateTime(fileInfo.ctime),
			mode: fileInfo.mode,
			links: fileInfo.links,
			major_device: fileInfo.major_device,
			minor_device: fileInfo.minor_device,
			inode: fileInfo.inode,
			uid: fileInfo.uid,
			gid: fileInfo.gid,
		};
	}

	/**
     * Converts a File.Stat to a :file_info record.
     * @param stat The File.Stat object to convert.
     * @returns :file_info record.
     */
	static toRecord(stat: FileStat): FileStat {
		return {
			size: stat.size,
			type: stat.type,
			access: stat.access,
			atime: FileInfoConverter.formatDateTime(stat.atime),
			mtime: FileInfoConverter.formatDateTime(stat.mtime).toString(), // Convert DateTime to string
			ctime: FileInfoConverter.formatDateTime(stat.ctime).toString(), // Convert DateTime to string
			mode: stat.mode,
			links: stat.links,
			major_device: stat.major_device,
			minor_device: stat.minor_device,
			inode: stat.inode,
			uid: stat.uid,
			gid: stat.gid,
		};
	}

	/**
     * Helper function to parse Date or number from :calendar.datetime() | integer()
     * @param dateTime The :calendar.datetime() or integer value.
     * @returns Parsed Date or number value.
     */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	private static parseDateTime(dateTime: any): Date | number {
		return typeof dateTime === 'number' ? dateTime : new Date(dateTime);
	}

	/**
     * Helper function to format Date or number to :calendar.datetime() | integer()
     * @param dateTime The Date or number value.
     * @returns Formatted :calendar.datetime() or integer value.
     */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	private static formatDateTime(dateTime: Date | number): any {
		if (dateTime instanceof Date) {
			return dateTime.toISOString(); // Format as ISO 8601 string with milliseconds.
		}
		return dateTime;
	}
}

// const elixirFileInfo = {
//     size: 1024,
//     type: 'regular',
//     access: 'read_write',
//     atime: 1669820525000,
//     mtime: '2023-08-01T12:34:56.789Z',
//     ctime: '2023-08-01T12:34:56.789Z',
//     mode: 0o755,
//     links: 1,
//     major_device: 0,
//     minor_device: 0,
//     inode: 12345,
//     uid: 1000,
//     gid: 1000,
// };

// const tsFileStat = FileInfoConverter.fromRecord(elixirFileInfo);
// console.log(tsFileStat);

// const tsFileInfo = FileInfoConverter.toRecord(tsFileStat);
// console.log(tsFileInfo);
// {
//   size: 1024,
//   type: 'regular',
//   access: 'read_write',
//   atime: 1669820525000,
//   mtime: 2023-08-01T12:34:56.789Z,
//   ctime: 2023-08-01T12:34:56.789Z,
//   mode: 493,
//   links: 1,
//   major_device: 0,
//   minor_device: 0,
//   inode: 12345,
//   uid: 1000,
//   gid: 1000
// }
// {
//   size: 1024,
//   type: 'regular',
//   access: 'read_write',
//   atime: 1669820525000,
//   mtime: '2023-08-01T12:34:56.789Z',
//   ctime: '2023-08-01T12:34:56.789Z',
//   mode: 493,
//   links: 1,
//   major_device: 0,
//   minor_device: 0,
//   inode: 12345,
//   uid: 1000,
//   gid: 1000
// }
