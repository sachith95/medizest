module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const age = (req.body.age || '0');
    const zipcode = (req.body.zipcode || 'value');
    const race = (req.body.race || 'value');
    const ep = (req.body.ep || '');
    const gender = (req.body.gender || 'value');
    var url = ''
    var data = ''
    var key = ''

    if (ep == 'education') {
        context.log('Education');
        this.url = "https://ussouthcentral.services.azureml.net/workspaces/503bbc5966a5497cb2738a6976ff128b/services/b6bf4e3f7e664dc88f28efb9fc2234e6/execute?api-version=2.0&details=true";
        this.data = `{
        "Inputs": {
            "input1": {
            "ColumnNames": [
                "age",
                "fnlwgt",
                "education",
                "occupation",
                "race",
                "gender",
                "native-country"
            ],
            "Values": [
                [
                "${age}",
                "0",
                "value",
                "value",
                "${race}",
                "value",
                "value"
                ],
                [
                "0",
                "0",
                "value",
                "value",
                "value",
                "value",
                "value"
                ]
            ]
            }
        },
        "GlobalParameters": {}
        }`;
        this.key = 'mfh98WE0V8FsJhDPDSh6bfu6mouijpSOYXCeASXDA7t+eRHNTxthHzu6pVJsnwqK78/3iIXXpz7pGDkZTxRPOA=='

    } else if (ep == 'economey') {
        context.log('Economy');
        this.url = "https://ussouthcentral.services.azureml.net/workspaces/503bbc5966a5497cb2738a6976ff128b/services/ddd500ba69b34caf9cb5e1379a35b008/execute?api-version=2.0&details=true";
        this.data = `{
        "Inputs": {
            "input1": {
            "ColumnNames": [
                "gender",
                "age",
                "income",
                "race",
                "edu_level"
            ],
            "Values": [
                [
                "value",
                "${age}",
                "value",
                "value",
                "value"
                ],
                [
                "value",
                "0",
                "value",
                "value",
                "value"
                ]
            ]
            }
        },
        "GlobalParameters": {}
        }`;
        this.key = 'QIkr3+9B1utej0eiyzvPfL3iBvM7iK7pQI0opsSf/0EnpMgrmjpfTfqXqp7H5bzc8C4iEBA31PSNojWMUQulGA=='

    } else if (ep == 'health') {
        context.log('health');
        this.url = "https://ussouthcentral.services.azureml.net/workspaces/503bbc5966a5497cb2738a6976ff128b/services/23dfd988caab4075a8a35164da42a3c4/execute?api-version=2.0&details=true";
        this.data = `{
  "Inputs": {
    "input1": {
      "ColumnNames": [
        "age",
        "sex",
        "charges"
      ],
      "Values": [
        [
          "${age}",
          "${gender}",
          "0"
        ],
        [
          "0",
          "value",
          "0"
        ]
      ]
    }
  },
  "GlobalParameters": {}
}`;
        this.key = 'U81ETqudaP+gvsLUr4fa/YCEh3ByOyuFDncw0Lf4NNmo4Xx+VI//Nx0i1VVB6YxjXlaxf/kdeh7vL6PqRR12bg=='
    }

    let response = await new Promise(resolve => {

        var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
        var xhr = new XMLHttpRequest();
        xhr.open("POST", this.url);

        xhr.setRequestHeader("Authorization", `Bearer ${this.key}`);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onload = function (e) {
            context.res = {
                // status: 200, /* Defaults to 200 */
                body: xhr.responseText
            };
            resolve(xhr.response);
        };
        xhr.onerror = function () {
            resolve(undefined);
            context.res = {
                // status: 200, /* Defaults to 200 */
                body: "** An error occurred during the XMLHttpRequest"
            };
        };

        xhr.send(this.data);
    })
}