interface ParsedOptions {
    [key: string]: boolean | string;
}

interface Options {
    [key: string]: "boolean" | "string";
}

/**
 * OptionParser class provides functions for parsing command line arguments.
 * 
 * Functions for parsing command line arguments.
 * 
 * https://hexdocs.pm/elixir/1.13.4/OptionParser.html
 * 
 * ```ts
    const argv: string[] = ["--debug", "--output", "output.txt"];
    const opts: Options = { debug: "boolean", => "string" };
    const parsedOptions = OptionParser.parse(argv, opts);
    console.log(parsedOptions); // => { debug: true, => 'output.txt' }

    const str = "--verbose --input input.txt";
    const argvFromString = OptionParser.split(str);
    console.log(argvFromString); // => [ '--verbose', '--input', 'input.txt' ]

    const options = { verbose: true, input: "input.txt" };
    const argvFromOptions = OptionParser.toArgv(options);
    console.log(argvFromOptions); // => [ '--verbose', '--input', 'input.txt' ]
```
 */
class OptionParser {
    /**
     * Parses the given `argv` array into a keyword list based on the provided `opts`.
     * @param argv - The array of command line options and arguments.
     * @param opts - The options configuration that specifies the type of each option.
     * @returns The parsed options as a keyword list.
     * @throws An Error if any invalid options are given.
     */
    static parse(argv: string[], opts: Options = {}): ParsedOptions {
        const result: ParsedOptions = {};
        let i = 0;

        while (i < argv.length) {
            const arg = argv[i];
            if (!arg.startsWith("--")) {
                break;
            }

            const option = arg.substring(2);
            const nextArg = argv[i + 1];

            switch (opts[option]) {
                case "boolean":
                    result[option] = true;
                    i++;
                    break;
                case "string":
                    if (nextArg) {
                        result[option] = nextArg;
                        i += 2;
                    } else {
                        throw new Error(`Invalid option: ${arg}`);
                    }
                    break;
                default:
                    throw new Error(`Invalid option: ${arg}`);
            }
        }

        return result;
    }

    /**
     * Similar to `parse`, but only parses the head of `argv`.
     * As soon as it finds a non-switch, it stops parsing.
     * @param argv - The array of command line options and arguments.
     * @param opts - The options configuration that specifies the type of each option.
     * @returns The parsed options as a keyword list.
     */
    static parseHead(argv: string[], opts: Options = {}): ParsedOptions {
        const result: ParsedOptions = {};
        let i = 0;

        for (i = 0; i < argv.length; i++) {
            const arg = argv[i];
            if (!arg.startsWith("--")) {
                break;
            }

            const option = arg.substring(2);
            const nextArg = argv[i + 1];

            switch (opts[option]) {
                case "boolean":
                    result[option] = true;
                    break;
                case "string":
                    if (nextArg) {
                        result[option] = nextArg;
                        i++;
                    }
                    break;
                default:
                    break;
            }
        }

        return result;
    }

    /**
     * Parses the given `argv` array into a keyword list based on the provided `opts`.
     * @param argv - The array of command line options and arguments.
     * @param opts - The options configuration that specifies the type of each option.
     * @returns The parsed options as a keyword list.
     * @throws An OptionParser.ParseError if any invalid options are given.
     */
    static parseOrFail(argv: string[], opts: Options = {}): ParsedOptions {
        const parsed = OptionParser.parse(argv, opts);
        for (let i = 0; i < argv.length; i++) {
            const arg = argv[i];
            if (arg.startsWith("--") && !parsed.hasOwnProperty(arg.substring(2))) {
                throw new Error(`Invalid option: ${arg}`);
            }
        }
        return parsed;
    }

    /**
     * Similar to `parseOrFail`, but only parses the head of `argv`.
     * As soon as it finds a non-switch, it stops parsing.
     * @param argv - The array of command line options and arguments.
     * @param opts - The options configuration that specifies the type of each option.
     * @returns The parsed options as a keyword list.
     * @throws An OptionParser.ParseError if any invalid options are given.
     */
    static parseHeadOrFail(argv: string[], opts: Options = {}): ParsedOptions {
        const parsed = OptionParser.parseHead(argv, opts);
        for (let i = 0; i < argv.length; i++) {
            const arg = argv[i];
            if (arg.startsWith("--") && !parsed.hasOwnProperty(arg.substring(2))) {
                throw new Error(`Invalid option: ${arg}`);
            }
        }
        return parsed;
    }

    /**
     * Splits the given string into an array of command line arguments (argv).
     * @param str - The input string to split.
     * @returns An array of command line arguments (argv).
     */
    static split(str: string): string[] {
        return str.split(/\s+/).filter((arg) => arg.trim() !== "");
    }

    /**
     * Receives a key-value enumerable and converts it to an array of command line arguments (argv).
     * @param options - The key-value enumerable representing the command line options and arguments.
     * @returns An array of command line arguments (argv).
     */
    static toArgv(options: ParsedOptions): string[] {
        const argv: string[] = [];
        for (const key in options) {
            const value = options[key];
            if (value === true) {
                argv.push(`--${key}`);
            } else {
                argv.push(`--${key}`, `${value}`);
            }
        }
        return argv;
    }
}

// const argv: string[] = ["--debug", "--output", "output.txt"];
// const opts: Options = { debug: "boolean", => "string" };
// const parsedOptions = OptionParser.parse(argv, opts);
// console.log(parsedOptions); // => { debug: true, => 'output.txt' }

// const str = "--verbose --input input.txt";
// const argvFromString = OptionParser.split(str);
// console.log(argvFromString); // => [ '--verbose', '--input', 'input.txt' ]

// const options = { verbose: true, input: "input.txt" };
// const argvFromOptions = OptionParser.toArgv(options);
// console.log(argvFromOptions); // => [ '--verbose', '--input', 'input.txt' ]