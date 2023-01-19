import {Component} from "react";

export class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: {
        RED1: '#630A09',
        RED2: '#A40A09',
        RED3: '#FD3032',
        GREEN1: '#4E6A32',
        GREEN2: '#478F57'
      },
      /*
      [ // row
        { // column
          text: '.',
          color: '#C20000',
          bold: false
        }
      ]
       */
      table: [],
      flower: []
    };
  }

  componentDidMount() {
    console.log('App starting...');
    let table = this.generateTable();
    this.setState({
      table,
      flower: this.getFlower()
    }, () => {
      this.refreshFlower(true);
    });
    setTimeout(() => {
      let interval = setInterval(() => {
        this.darkFlower();
        setTimeout(this.lightFlower, 400)
      }, 800);
      setTimeout(() => {
        clearInterval(interval);
      }, 2400);
    }, 3000);
  }

  getFlower = () => {
    return [
      // line 1
      [
        // one color type
        {
          indexes: [14, 15, 16, 17, 18, 19, 20, 21, 25, 26, 27, 28, 29, 30, 31, 32 ],
          color: this.state.colors.RED3,
          bold: true
        }
      ],
      [
        {
          indexes: [10, 11, 12, 13, 14, 15, 16, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 32, 33, 34, 35, 36],
          color: this.state.colors.RED3,
          bold: true
        }
      ],
      [
        {
          indexes: [7, 8, 9, 10, 16, 17, 18, 19, 20, 21, 22, 23, 24, 26, 27, 28, 29, 30, 31, 36, 37, 38, 39, 40],
          color: this.state.colors.RED3,
          bold: true
        }
      ],
      // line 4
      [
        {
          indexes: [5, 6, 7, 13, 14, 15, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 38, 39, 40],
          color: this.state.colors.RED3,
          bold: true
        }
      ],
      [
        {
          indexes: [4, 5, 13, 14, 15, 16, 27, 28, 29, 32, 35, 36, 37, 40, 41],
          color: this.state.colors.RED3,
          bold: true
        }
      ],
      [
        {
          indexes: [4, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 29, 30, 32, 37, 38, 40, 41],
          color: this.state.colors.RED3,
          bold: true
        }
      ],
      [
        {
          indexes: [3, 4, 5, 9, 10, 13, 14,15, 26, 27, 28, 30, 31, 32, 38, 39, 40, 41],
          color: this.state.colors.RED3,
          bold: true
        }
      ],
      // line 8
      [
        {
          indexes: [1, 2, 3, 5, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 23, 24, 28, 29, 31, 32, 39, 40, 41],
          color: this.state.colors.RED3,
          bold: true
        }
      ],
      [
        {
          indexes: [0, 1, 5, 6, 8, 9, 10, 11, 13, 16, 17, 18, 19, 20, 21, 22, 23, 24, 29, 31, 32, 39, 40, 41],
          color: this.state.colors.RED3,
          bold: true
        }
      ],
      // line 10
      [
        {
          indexes: [0, 6, 7, 8, 10, 13, 16, 17, 18, 19, 20, 21, 22, 23, 24, 28, 31, 32, 37, 38, 39, 40, 41, 42],
          color: this.state.colors.RED3,
          bold: true
        }
      ],
      [
        {
          indexes: [0, 1, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 23, 24, 31, 36, 37, 39, 40],
          color: this.state.colors.RED3,
          bold: true
        }
      ],
      [
        {
          indexes: [1, 2, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 30, 31, 36, 38, 39, 40],
          color: this.state.colors.RED3,
          bold: true
        }
      ],
      // line 13
      [
        {
          indexes: [2, 3, 11, 12, 13, 14, 28, 29, 36, 37, 38, 39],
          color: this.state.colors.RED3,
          bold: true
        }
      ],
      [
        {
          indexes: [3, 4, 5, 13, 26, 27, 28, 35, 36, 37],
          color: this.state.colors.RED3,
          bold: true
        }
      ],
      [
        {
          indexes: [5, 6, 21, 22, 23, 24, 25, 32, 33, 34, 35, 36, 38, 39],
          color: this.state.colors.RED3,
          bold: true
        }
      ],
      // line 16
      [
        {
          indexes: [6, 7, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 28, 29, 30, 31, 36, 37, 38],
          color: this.state.colors.RED3,
          bold: true
        }
      ],
      [
        {
          indexes: [6, 7, 15, 16, 17, 18, 24, 25, 26, 27, 28, 33, 34, 35, 36],
          color: this.state.colors.RED3,
          bold: true
        },
        {
          indexes: [37, 38, 39, 40],
          color: this.state.colors.GREEN1,
          bold: true
        }
      ],
      [
        {
          indexes: [7, 8, 9, 19, 20, 21, 22, 23, 30, 31, 32],
          color: this.state.colors.RED3,
          bold: true
        },
        {
          indexes: [33, 34, 35, 36, 37, 38],
          color: this.state.colors.GREEN1,
          bold: true
        }
      ],
      [
        {
          indexes: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 26, 27, 28, 29, 30],
          color: this.state.colors.RED3,
          bold: true
        },
        {
          indexes: [31, 32, 33, 34],
          color: this.state.colors.GREEN1,
          bold: true
        }
      ],
      // line 20
      [
        {
          indexes: [12, 13, 14, 15, 16, 17, 21],
          color: this.state.colors.RED3,
          bold: true
        },
        {
          indexes: [22, 23, 24, 25, 26, 28, 29, 30, 31, 32, 33, 34, 35],
          color: this.state.colors.GREEN1,
          bold: true
        }
      ],
      [
        {
          indexes: [20, 21, 22, 23, 24, 28, 29, 30],
          color: this.state.colors.GREEN1,
          bold: true
        }
      ],
      [
        {
          indexes: [19, 20, 21, 28, 29, 30],
          color: this.state.colors.GREEN1,
          bold: true
        }
      ],
      // line 23
      [
        {
          indexes: [29, 30],
          color: this.state.colors.GREEN1,
          bold: true
        }
      ],
      [
        {
          indexes: [29, 30, 31],
          color: this.state.colors.GREEN1,
          bold: true
        }
      ],
      [
        {
          indexes: [29, 30, 31, 36],
          color: this.state.colors.GREEN1,
          bold: true
        },
        {
          indexes: [35, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56],
          color: this.state.colors.GREEN2,
          bold: true
        }
      ],
      [
        {
          indexes: [30, 31, 36, 37, 38, 39, 55, 56],
          color: this.state.colors.GREEN1,
          bold: true
        },
        {
          indexes: [34, 35, 45, 46, 47, 48, 51, 52, 53, 54],
          color: this.state.colors.GREEN2,
          bold: true
        }
      ],
      // line 27
      [
        {
          indexes: [30, 31, 32, 37, 38, 39, 40, 54, 55],
          color: this.state.colors.GREEN1,
          bold: true
        },
        {
          indexes: [34, 35, 44, 45, 48, 49, 50, 51],
          color: this.state.colors.GREEN2,
          bold: true
        }
      ],
      [
        {
          indexes: [31, 32, 38, 39, 40, 41, 52, 53, 54],
          color: this.state.colors.GREEN1,
          bold: true
        },
        {
          indexes: [34, 35, 44, 46, 47, 48],
          color: this.state.colors.GREEN2,
          bold: true
        }
      ],
      [
        {
          indexes: [31, 32, 33, 39, 40, 41, 47, 48, 49, 50, 51, 52, 53],
          color: this.state.colors.GREEN1,
          bold: true
        },
        {
          indexes: [34, 35, 36, 44, 45, 46],
          color: this.state.colors.GREEN2,
          bold: true
        }
      ],
      // line 30
      [
        {
          indexes: [31, 32, 33, 40, 41, 42, 46, 47, 48, 49, 50],
          color: this.state.colors.GREEN1,
          bold: true
        },
        {
          indexes: [35, 36, 37, 38, 39, 43, 44],
          color: this.state.colors.GREEN2,
          bold: true
        }
      ],
      [
        {
          indexes: [32, 33, 40, 41, 42],
          color: this.state.colors.GREEN1,
          bold: true
        },
        {
          indexes: [37, 38, 39, 43, 44, 45, 46, 47, 48],
          color: this.state.colors.GREEN2,
          bold: true
        }
      ],
      [
        {
          indexes: [32, 33, 34, 37, 38, 39, 40, 41, 42],
          color: this.state.colors.GREEN1,
          bold: true
        },
        {
          indexes: [43, 44, 47, 48, 49, 50],
          color: this.state.colors.GREEN2,
          bold: true
        }
      ],
      [
        {
          indexes: [33, 34, 35, 36, 37, 38, 41, 42, 44],
          color: this.state.colors.GREEN1,
          bold: true
        },
        {
          indexes: [45, 46, 49, 50],
          color: this.state.colors.GREEN2,
          bold: true
        }
      ],
      [
        {
          indexes: [33, 34, 35, 36, 41, 42, 43],
          color: this.state.colors.GREEN1,
          bold: true
        },
        {
          indexes: [46, 47, 48, 49, 50],
          color: this.state.colors.GREEN2,
          bold: true
        }
      ],
      // line 35
      [
        {
          indexes: [33, 34, 35, 42, 43, 44, 45, 46, 47],
          color: this.state.colors.GREEN1,
          bold: true
        },
        {
          indexes: [11, 12, 13, 14, 15, 16, 48, 49, 50],
          color: this.state.colors.GREEN2,
          bold: true
        }
      ],
      [
        {
          indexes: [34, 35],
          color: this.state.colors.GREEN1,
          bold: true
        },
        {
          indexes: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 27, 28, 29],
          color: this.state.colors.GREEN2,
          bold: true
        }
      ],
      [
        {
          indexes: [8, 9, 29, 30, 34, 35],
          color: this.state.colors.GREEN1,
          bold: true
        },
        {
          indexes: [10, 11, 12, 13, 14, 18, 19, 24, 25, 26, 27, 28],
          color: this.state.colors.GREEN2,
          bold: true
        }
      ],
      // line 38
      [
        {
          indexes: [8, 9, 10, 28, 29, 30, 35, 36],
          color: this.state.colors.GREEN1,
          bold: true
        },
        {
          indexes: [14, 15, 16, 17, 18, 19, 20, 24, 25, 27],
          color: this.state.colors.GREEN2,
          bold: true
        }
      ],
      [
        {
          indexes: [9, 10, 11, 12, 27, 28, 29, 30, 35, 36],
          color: this.state.colors.GREEN1,
          bold: true
        },
        {
          indexes: [18, 19, 20, 21, 24, 25, 26],
          color: this.state.colors.GREEN2,
          bold: true
        }
      ],
      [
        {
          indexes: [11, 12, 13, 14, 15, 16, 17, 18, 19, 25, 26, 27, 29, 35, 36],
          color: this.state.colors.GREEN1,
          bold: true
        },
        {
          indexes: [22, 23, 24],
          color: this.state.colors.GREEN2,
          bold: true
        }
      ],
      [
        {
          indexes: [24, 25, 26, 27, 28, 29, 35, 36],
          color: this.state.colors.GREEN1,
          bold: true
        },
        {
          indexes: [21, 22, 23],
          color: this.state.colors.GREEN2,
          bold: true
        }
      ],
      // line 42
      [
        {
          indexes: [24, 25, 29, 30, 31, 32, 35, 36],
          color: this.state.colors.GREEN1,
          bold: true
        },
        {
          indexes: [20, 21, 22, 23],
          color: this.state.colors.GREEN2,
          bold: true
        }
      ],
      [
        {
          indexes: [24, 25, 26, 32, 33, 34, 35, 36],
          color: this.state.colors.GREEN1,
          bold: true
        },
        {
          indexes: [20, 21, 22],
          color: this.state.colors.GREEN2,
          bold: true
        }
      ],
      [
        {
          indexes: [23, 24, 25, 26, 34, 35, 36],
          color: this.state.colors.GREEN1,
          bold: true
        },
        {
          indexes: [20, 21, 22],
          color: this.state.colors.GREEN2,
          bold: true
        }
      ],
      [
        {
          indexes: [22, 23, 24, 35, 36],
          color: this.state.colors.GREEN1,
          bold: true
        },
        {
          indexes: [21],
          color: this.state.colors.GREEN2,
          bold: true
        }
      ],
      // line 46
      [
        {
          indexes: [35, 36],
          color: this.state.colors.GREEN1,
          bold: true
        }
      ],
      [
        {
          indexes: [35, 36],
          color: this.state.colors.GREEN1,
          bold: true
        }
      ],
      [
        {
          indexes: [35, 36],
          color: this.state.colors.GREEN1,
          bold: true
        }
      ],
      [
        {
          indexes: [35, 36],
          color: this.state.colors.GREEN1,
          bold: true
        }
      ],
      // line 50
      [
        {
          indexes: [35, 36],
          color: this.state.colors.GREEN1,
          bold: true
        }
      ],
      [
        {
          indexes: [35, 36],
          color: this.state.colors.GREEN1,
          bold: true
        }
      ],
      [
        {
          indexes: [34, 35, 36],
          color: this.state.colors.GREEN1,
          bold: true
        }
      ],
      [
        {
          indexes: [34, 35],
          color: this.state.colors.GREEN1,
          bold: true
        }
      ],
      // line 54
      [
        {
          indexes: [34, 35],
          color: this.state.colors.GREEN1,
          bold: true
        }
      ],
      [
        {
          indexes: [34, 35],
          color: this.state.colors.GREEN1,
          bold: true
        }
      ],
      [
        {
          indexes: [34, 35],
          color: this.state.colors.GREEN1,
          bold: true
        }
      ],
      [
        {
          indexes: [34, 35],
          color: this.state.colors.GREEN1,
          bold: true
        }
      ],
      // line 58
      [
        {
          indexes: [34, 35],
          color: this.state.colors.GREEN1,
          bold: true
        }
      ],
      [
        {
          indexes: [34, 35],
          color: this.state.colors.GREEN1,
          bold: true
        }
      ],
      [
        {
          indexes: [34, 35],
          color: this.state.colors.GREEN1,
          bold: true
        }
      ],
      // line 61
      [
        {
          indexes: [34, 35],
          color: this.state.colors.GREEN1,
          bold: true
        }
      ],
      [
        {
          indexes: [34, 35],
          color: this.state.colors.GREEN1,
          bold: true
        }
      ],
      [
        {
          indexes: [34, 35],
          color: this.state.colors.GREEN1,
          bold: true
        }
      ]
    ];
  }

  lightFlower = () => {
    this.changeFlower(this.state.colors.RED2, this.state.colors.RED3);
  }

  darkFlower = () => {
    this.changeFlower(this.state.colors.RED3, this.state.colors.RED2);
  }

  changeFlower = (from, to) => {
    let flower = this.state.flower;
    flower.map((item, i) => {
      item.map((col, j) => {
        if (col.color === from) {
          col.color = to;
        }
      });
    });
    this.setState({flower}, () => {
      this.refreshFlower(false);
    });
  }

  generateTable = () => {
    let table = [];
    for (let i = 0; i <= 63; i++) {
      let cols = [];
      for (let j = 0; j <= 57; j++) {
        cols.push({
          text: '.',
          color: '#000000',
          bold: true
        });
      }
      table.push(cols);
    }
    return table;
  }

  refreshFlower = (animate) => {
    let table = this.state.table;
    this.state.flower.map((item, i) => {
      let row = table[i];
      item.map((col, j) => {
        setTimeout(() => {
          col.indexes.map((colIndex, x) => {
            row[colIndex].color = col.color;
            row[colIndex].bold = col.bold;
          });
          this.setState({table});
        }, animate ? 250 + (i * 60) : 0)
      });
    });
  }

  render() {
    return (
      <div className="container">
        <table className={'table'}>
          <tbody>
          {
            this.state.table.map((row, i) => {
              return (
                <tr key={'row_'+i}>
                  {
                    row.map((col, j) => {
                      return (
                        <td style={{color: col.color, fontWeight: col.bold ? 'bold' : 'normal'}} key={'col_'+j}>{col.text}</td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
          <tr></tr>
          <tr>
            <td className={'copyright'} colSpan={57}><span>by</span> <a href="https://github.com/royryando/red-rose-flower">Roy</a></td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}